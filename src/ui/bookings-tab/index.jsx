import { useLoad } from "../../hooks/storage";
import useFetch from "../../hooks/api";
import { Link } from "react-router-dom";
import { DelUpdBtn, DelIcon, FlexWrap, Bold, BtnImageWrap, DelUpdBtnWrap, BookingDetailsWrap, BookingWrap } from "./style";
import { useEffect, useState } from "react";
import useFormatDate from "../../hooks/format-dates";

export default function BookingsTab(props) {
    const [
        initialBookings,
        setInitialBookings,
    ] = props.children;

    return(
        <div>
            <BookingDetailsWrap>
                <h2>Upcoming bookings</h2>
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
                                            const user = useLoad("user");
                                            const dataToSend = {
                                                method: "DELETE",
                                                headers: {
                                                    Authorization: `Bearer ${user.token}`,
                                                    "Content-Type": "application/json",
                                                },
                                            }
                                            function checkIds(ids, deletedId) {
                                                console.log(`filter and remove object with id: ${deletedId}`)
                                                return ids !== deletedId;
                                            }

                                            await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}?_venue=true`, dataToSend);

                                            const newBookings = initialBookings?.filter((b) => checkIds(b.id, booking.id));
                                            console.log("FILTERED BOOKINGS:");
                                            console.log(newBookings);
                                            setInitialBookings(newBookings);
                                        }}>
                                            <DelIcon className="fa-solid fa-trash"></DelIcon>
                                        </DelUpdBtn>
                                        <DelUpdBtn 
                                        aria-label="Delete this booking"
                                        onClick={() => {
                                            console.log("not made yet")
                                        }}>
                                            <DelIcon className="fa-solid fa-pen-clip"></DelIcon>
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