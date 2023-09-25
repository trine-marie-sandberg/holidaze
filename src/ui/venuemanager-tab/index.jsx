import { useState, useEffect } from "react";
import useSave, { useLoad } from "../../hooks/storage";
import useFetch, { useSendData } from "../../hooks/api";
import ListVenueForm from "../list-venue";
import { Bold, BtnImageWrap, DelUpdBtn, DelUpdBtnWrap, FlexWrap, PaddingRight } from "./style";
import { Link } from "react-router-dom";

export default function VenueManagerTab(props) {

    const [
        isManager,
        setIsManager,
    ] = props.children;
    const user = useLoad("user");
    const [ formVisible, setFormVisible ] = useState(false);
    const [ initiAlVenues, setInitialVenues ] = useState([]);
    const [ bookings, setBookings ] = useState([]);
    const [ filteredBookings, setFilteredBookings ] = useState([]);
    const fetchOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
        },
    }
    const { data, load, error } = useFetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${user.name}/venues/?_bookings=true`, fetchOptions);
    useEffect(() => setInitialVenues(data), [data]);

    return(
        <div>
            {isManager &&
                <div>
                    <h2>My venues</h2>
                    {data <= 0 &&
                        <div>
                            <PaddingRight>
                                <p>Currently no venues</p>
                                <button onClick={() => {
                                    setFormVisible(true);
                                }}>
                                    Create a new listing
                                </button>
                            </PaddingRight>
                            {formVisible &&
                            <div>
                                <div>
                                    <button onClick={() => {
                                        setFormVisible(false)
                                    }}>
                                        Close X
                                    </button>
                                </div>
                                <ListVenueForm>
                                </ListVenueForm>
                            </div>
                            }
                        </div>
                    }
                    {initiAlVenues &&
                    <div>
                        <PaddingRight>
                            <button onClick={() => {
                                setFormVisible(true);
                            }}>
                                Create a new listing
                            </button>
                        </PaddingRight>
                        {formVisible &&
                            <div>
                                <div>
                                    <button onClick={() => {
                                        setFormVisible(false)
                                    }}>
                                        Close X
                                    </button>
                                </div>
                                <ListVenueForm>
                                </ListVenueForm>
                            </div>
                        }
                        <div>{initiAlVenues.map((venue) => {
                            let imageSrc = venue.media;
                            if(venue.media?.length < 1) {
                                imageSrc = "/placeholder-img.jpg";
                            }
                            return(
                                <div key={venue.id}>
                                    <FlexWrap>
                                        <Link to={`/venue/${venue.id}`}>
                                            <PaddingRight>
                                                <h2>{venue.name}</h2>
                                                <p>Price: ${venue.price}</p>
                                                <p>Maximum guets: {venue.maxGuests}</p>
                                                <p>Rating: {venue.rating}</p>
                                                <h3>Location</h3>
                                                <ul>
                                                    <li><Bold>Address:</Bold>{venue.location.address}</li>
                                                    <li><Bold>City:</Bold>{venue.location.city}</li>
                                                    <li><Bold>Continent:</Bold>{venue.location.continent}</li>
                                                    <li><Bold>Country:</Bold>{venue.location.country}</li>
                                                </ul>
                                                <h3>Current reservations for this venue</h3>
                                                <div>
                                                    {
                                                    venue.bookings.map((booking) => {
                                                        return (
                                                            <div key={booking.id}>
                                                                <p>From {booking.dateFrom} to {booking.dateTo}</p>
                                                                <p>Guests {booking.guests}</p>
                                                            </div>
                                                        )
                                                    })
                                                    }
                                                </div>
                                            </PaddingRight>
                                        </Link>
                                        <BtnImageWrap
                                            style={{ 
                                            backgroundImage: `url(${imageSrc})` 
                                            }}
                                        >
                                            <DelUpdBtnWrap>
                                                <DelUpdBtn onClick={() => {
                                                    console.log("click")
                                                }}>
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </DelUpdBtn>
                                                <DelUpdBtn onClick={() => {
                                                    console.log("click")
                                                }}>
                                                    <i className="fa-solid fa-pen-clip"></i>
                                                </DelUpdBtn>
                                            </DelUpdBtnWrap>
                                        </BtnImageWrap>
                                    </FlexWrap>
                                </div>
                            )
                        })}</div>
                    </div>
                    }
                    {initiAlVenues > 0 &&
                    <div>venues</div>
                    }
                </div>
            }
            {isManager === false &&
                <div>
                    <h2>Want to become a venue manager?</h2>
                    <button onClick={
                        async () => {
                            const body = {
                                venueManager: true,
                            }
                            const dataToSend = {
                                method: "PUT",
                                headers: {
                                    Authorization: `Bearer ${user.token}`,
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(body),
                                }
                            const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${user.name}`, dataToSend);
                            const json = await response.json()
                            console.log(json)
                            if(response.ok) {
                                setIsManager(true);
                                useSave("user", ({
                                    avatar: user.avatar,
                                    email: user.email,
                                    manager: true,
                                    name: user.name,
                                    token: user.token,
                                }))
                            }}}>
                        Become a venue manager
                    </button>
                </div>
            }
        </div>
    )
}