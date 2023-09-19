import { useLoad } from "../../hooks/storage";
import useFetch from "../../hooks/api";
import { Link } from "react-router-dom";
import { DelUpdBtn, DelIcon, FlexWrap, Bold } from "./style";
import { useEffect, useState } from "react";
import useFormatDate from "../../hooks/format-dates";

export default function BookingsTab(props) {
    const [
        data,
        load,
        error,
    ] = props.children;

    const [ bookingDisplay, setBookingDisplay ] = useState(data);
    useEffect(() => setBookingDisplay(data), [data]);
    console.log(bookingDisplay.bookings)
    return(
        <div>
            <h2>Upcoming bookings</h2>
            <div>
                {load && 
                <p>Loading . . .</p>
                }
                {error &&
                <p>error</p>
                }
                {data && 
                  <div>
                    {bookingDisplay.bookings?.map((booking) => {
                    return(
                        <div key={booking.id}>
                            <FlexWrap>
                                <div>
                                    <p>From <Bold>{useFormatDate(booking.dateFrom)}</Bold> to <Bold>{useFormatDate(booking.dateTo)}</Bold></p>
                                    <p>Guests: {booking.guests}</p>
                                </div>
                                <FlexWrap>
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
                                        await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}?_venue=true`, dataToSend);
                                        setBookingDisplay(bookingDisplay.bookings?.filter((item) => item.id === booking.id));
                                        console.log(`bookingDisplay.bookings: ${bookingDisplay.bookings} booking.id: ${booking.id}`)
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
                                    
                                </FlexWrap>
                            </FlexWrap>
                        </div>
                    )
                })}
                  </div>
                }
                {data.length < 1 &&
                  <p>No bookings</p>
                }
            </div>
        </div>
    )
}