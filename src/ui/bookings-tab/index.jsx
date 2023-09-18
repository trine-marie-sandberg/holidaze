import { useLoad } from "../../hooks/storage";
import useFetch from "../../hooks/api";
import { Link } from "react-router-dom";
import { DelUpdBtn, DelIcon, FlexWrap, Bold } from "./style";
import { useEffect, useState } from "react";

export default function BookingsTab() {
    const user = useLoad("user");
    const fetchOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
        },
    }
    const { data, load, error } = useFetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${user.name}/bookings`, fetchOptions);
    const [ bookingDisplay, setBookingDisplay ] = useState(data);
    useEffect(() => setBookingDisplay(data), [data]);

    function formatDate(date) {

        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return [year, month, day].join('-');
    }
    //https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd 

    return(
        <div>
            <h2>Upcoming bookings</h2>
            <div>
                {data.length >= 1 && 
                  <div>
                    {bookingDisplay.map((booking) => {
                    return(
                        <div key={booking.id}>
                            <FlexWrap>
                                <div>
                                    <p>From <Bold>{formatDate(booking.dateFrom)}</Bold> to <Bold>{formatDate(booking.dateFrom)}</Bold></p>
                                    <p>Guests: {booking.guests}</p>
                                </div>
                                <FlexWrap>
                                    <DelUpdBtn 
                                      aria-label="Delete this booking"
                                      onClick={async () => {
                                        const dataToSend = {
                                            method: "DELETE",
                                            headers: {
                                                Authorization: `Bearer ${user.token}`,
                                                "Content-Type": "application/json",
                                            },
                                        }
                                        await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}?_venue=true`, dataToSend);
                                        setBookingDisplay(bookingDisplay.filter((item) => item.id !== booking.id));
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