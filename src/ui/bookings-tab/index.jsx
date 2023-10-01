import { useLoad } from "../../hooks/storage";
import { Link } from "react-router-dom";
import { DelUpdBtn, DelIcon, FlexWrap, Bold, BtnImageWrap, DelUpdBtnWrap, BookingDetailsWrap, BookingWrap, BookingsHeading, YesNoWrap, YesBtn, NoBtn } from "./style";
import useFormatDate from "../../hooks/format-dates";
import { useState } from "react";

export default function BookingsTab(props) {
    const [ deleteMessage, setDeleteMessage ] = useState(false);
    const [ doDelete, setDoDelete ] = useState(false);
    const [
        initialBookings,
        setInitialBookings,
    ] = props.children;

    return(
        <div>
            <BookingDetailsWrap>
                <BookingsHeading>Upcoming bookings</BookingsHeading>
            </BookingDetailsWrap>
            <div>
                {initialBookings && 
                  <div>
                    {initialBookings.map((booking) => {
                        let imageSrc = booking.venue.media;
                        if(booking.media?.length < 1) {
                            imageSrc = "/placeholder-img.jpg";
                        }
                    return(
                        <BookingWrap key={booking.id}>
                            <FlexWrap>
                                <Link to={`/venue/${booking.venue.id}`}>
                                    <BookingDetailsWrap>
                                        <h3>{booking.venue.name}</h3>
                                        <p>From <Bold>{useFormatDate(booking.dateFrom)}</Bold> to <Bold>{useFormatDate(booking.dateTo)}</Bold></p>
                                        <p>Booked guests: {booking.guests}</p>
                                        {deleteMessage && 
                                          <div>
                                            <p>Do you want to delete this booking?</p>
                                            <YesNoWrap>
                                                <YesBtn
                                                  aria-label="Delete this booking"
                                                  onClick={async (e) => {
                                                    e.preventDefault();
                                                    try {
                                                        const user = useLoad("user");
                                                        const dataToSend = {
                                                            method: "DELETE",
                                                            headers: {
                                                                Authorization: `Bearer ${user.token}`,
                                                                "Content-Type": "application/json",
                                                            },
                                                        }
                                                        function checkIds(ids, deletedId) {
                                                            return ids !== deletedId;
                                                        }
                                                        await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}?_venue=true`, dataToSend);
                                                        const newBookings = initialBookings?.filter((b) => checkIds(b.id, booking.id));
                                                        setInitialBookings(newBookings);
                                                    } catch(error) {
                                                        console.log(error);
                                                    }
                                                  }}
                                                >
                                                    Yes
                                                </YesBtn>
                                                <NoBtn
                                                  aria-label="Don't delete booking"
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    setDeleteMessage(false);
                                                  }}
                                                >
                                                    No
                                                </NoBtn>
                                            </YesNoWrap>
                                          </div>
                                        }
                                    </BookingDetailsWrap>
                                </Link>
                                <BtnImageWrap
                                    style={{ 
                                    backgroundImage: `url(${imageSrc})` 
                                    }}
                                >
                                    <DelUpdBtnWrap>
                                        <DelUpdBtn 
                                        aria-label="Delete this booking"
                                        onClick={async () => {
                                            setDeleteMessage(true);
                                        }}>
                                            <DelIcon className="fa-solid fa-trash"></DelIcon>
                                        </DelUpdBtn>
                                    </DelUpdBtnWrap>
                                </BtnImageWrap>
                            </FlexWrap>
                        </BookingWrap>
                    )
                })}
                  </div>
                }
            </div>
        </div>
    )
}