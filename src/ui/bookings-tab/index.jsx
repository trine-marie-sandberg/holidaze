import { useLoad } from "../../hooks/storage";
import useFetch from "../../hooks/api";
import { Link } from "react-router-dom";
import { DelUpdBtn, DelIcon, FlexWrap } from "./style";

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

    return(
        <div>
            <h2>Upcoming bookings</h2>
            <div>
                {data.length >= 1 && 
                  <div>
                    {data.map((data) => {
                    return(
                        <div key={data.id}>
                            <FlexWrap>
                                <div>
                                    <p>From {data.dateFrom} to {data.dateFrom}</p>
                                    <p>Guests: {data.guests}</p>
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
                                        await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${data.id}?_venue=true`, dataToSend);
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