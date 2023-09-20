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

    const [ initialBookings, setInitialBookings ] = useState([]);
    const [ idsArray, setIdsArray ] = useState([]);
    useEffect(() => setInitialBookings(data), [data]);

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
                    {initialBookings.bookings?.map((booking) => {
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
                                        function checkIds(ids, deletedId) {
                                            // console.log(`ids: ${ids}`)
                                            console.log(`search and kill id: ${deletedId}`)
                                            return ids !== deletedId
                                        }
                                        // const idsToMerge = initialBookings.bookings;
                                        // const mergedIds = [];
                                        // console.log("IDS TO MERGE:")
                                        // console.log(idsToMerge)
                                        // for(let i = 0; i < idsToMerge.length; i++) {
                                        //     mergedIds.push(idsToMerge[i].id)
                                        // }
                                        // console.log("MERGED IDS")
                                        // console.log(mergedIds)
                                        // setIdsArray(mergedIds)
                                        await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}?_venue=true`, dataToSend);
                                        // setInitialBookings(idsArray.filter((ids) => checkIds(ids, booking.id)));
                                        // const filteredIds = mergedIds?.filter((ids) => checkIds(ids, booking.id));
                                        const newBookings = initialBookings.bookings?.filter((b) => checkIds(b.id, booking.id))
                                        console.log("FILTERED BOOKINGS:")
                                        console.log(newBookings)
                                        // setInitialBookings(initialBookings.bookings?.filter((bookings) => bookings.id !== booking.id))
                                        setInitialBookings(newBookings)
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