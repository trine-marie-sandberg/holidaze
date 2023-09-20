import { useLoad } from "../../hooks/storage";
import useFetch from "../../hooks/api";
import { Link } from "react-router-dom";
import { DelUpdBtn, DelIcon, FlexWrap, Bold } from "./style";
import { useEffect, useState } from "react";
import useFormatDate from "../../hooks/format-dates";

export default function BookingsTab(props) {
    const [
        initialBookings,
        setInitialBookings,
    ] = props.children;

    return(
        <div>
            <h2>Upcoming bookings</h2>
            <div>
                {initialBookings && 
                  <div>
                    {initialBookings.bookings?.map((booking) => {
                    return(
                        <div key={booking.id}>
                            <FlexWrap>
                                <Link to={`/venue/${booking.venue.id}`}>
                                    <p>From <Bold>{useFormatDate(booking.dateFrom)}</Bold> to <Bold>{useFormatDate(booking.dateTo)}</Bold></p>
                                    <p>Guests: {booking.guests}</p>
                                </Link>
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
                                        function checkIds(ids, deletedId) {
                                            console.log(`filter and remove object with id: ${deletedId}`)
                                            return ids !== deletedId;
                                        }

                                        await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}?_venue=true`, dataToSend);

                                        const newBookings = initialBookings.bookings?.filter((b) => checkIds(b.id, booking.id));
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
                                    
                                </FlexWrap>
                            </FlexWrap>
                        </div>
                    )
                })}
                  </div>
                }
            </div>
        </div>
    )
}