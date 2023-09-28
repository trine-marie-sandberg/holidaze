import { useState, useEffect } from "react";
import useSave, { useLoad } from "../../hooks/storage";
import useFetch, { useSendData } from "../../hooks/api";
import ListVenueForm from "../list-venue";
import { Bold, BtnImageWrap, CloseBtn, CloseBtnWrap, DelUpdBtn, DelUpdBtnWrap, DetailsWrap, FlexWrap, FormContainer, LocationWrap, MetasWrap, PaddingRight, ToVenueBtn } from "./style";
import { Link } from "react-router-dom";
import useFormatDate from "../../hooks/format-dates";
import HeadingAndBtn from "../heading-and-btn";

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
                    <HeadingAndBtn>
                        {setFormVisible}
                        {<h2>My venues</h2>}
                        {<i className="fa-solid fa-plus" aria-label="List new venue"></i>}
                    </HeadingAndBtn>
                    {data <= 0 &&
                        <div>
                            <PaddingRight>
                                <p>Currently no venues</p>
                            </PaddingRight>
                            {formVisible &&
                            <div>
                                <div>
                                    <CloseBtn 
                                    onClick={() => {
                                        setFormVisible(false)
                                    }}
                                    aria-label="Close form"
                                    >
                                        Close X
                                    </CloseBtn>
                                </div>
                                <ListVenueForm>
                                    {initiAlVenues}
                                    {setInitialVenues}
                                    {setFormVisible}
                                </ListVenueForm>
                            </div>
                            }
                        </div>
                    }
                    {initiAlVenues &&
                    <div>
                        {formVisible &&
                            <FormContainer>
                                <CloseBtnWrap>
                                    <CloseBtn 
                                    onClick={() => {
                                        setFormVisible(false)
                                    }}
                                    aria-label="Close form"
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </CloseBtn>
                                </CloseBtnWrap>
                                <ListVenueForm>
                                    {initiAlVenues}
                                    {setInitialVenues}
                                    {setFormVisible}
                                </ListVenueForm>
                            </FormContainer>
                        }
                        {initiAlVenues.map((venue) => {
                            let imageSrc = venue.media;
                            if(venue.media?.length < 1) {
                                imageSrc = "/placeholder-img.jpg";
                            }
                            return(
                                <div key={venue.id}>
                                    <FlexWrap>
                                        <div>
                                            <BtnImageWrap
                                                    style={{ 
                                                    backgroundImage: `url(${imageSrc})` 
                                                    }}
                                                >
                                                    <DelUpdBtnWrap>
                                                        <DelUpdBtn 
                                                                onClick={async () => {
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
                                                                await fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${venue.id}`, dataToSend);
                                                                const newVenues = initiAlVenues?.filter((b) => checkIds(b.id, venue.id));
                                                                console.log("FILTERED Venues:");
                                                                console.log(newVenues);
                                                                setInitialVenues(newVenues);
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
                                            <h2>{venue.name}</h2>
                                            <ToVenueBtn>
                                                <Link to={`/venue/${venue.id}`}>
                                                    Go to venue <i className="fa-solid fa-chevron-right"></i>
                                                </Link>
                                            </ToVenueBtn>
                                            <LocationWrap>
                                                <h3>Location</h3>
                                                <ul>
                                                    <li><Bold>Address:</Bold>{venue.location.address}</li>
                                                    <li><Bold>City:</Bold>{venue.location.city}</li>
                                                    <li><Bold>Continent:</Bold>{venue.location.continent}</li>
                                                    <li><Bold>Country:</Bold>{venue.location.country}</li>
                                                </ul>
                                            </LocationWrap>
                                        </div>
                                        <DetailsWrap>
                                                <h3>Venue details</h3>
                                                <p>Price: <Bold>${venue.price}</Bold></p>
                                                <p>Maximum guets: <Bold>{venue.maxGuests}</Bold></p>
                                                <p>Rating: <Bold>{venue.rating}</Bold></p>
                                                <MetasWrap>
                                                        {venue.meta.wifi &&
                                                            <i className="fa-solid fa-wifi"/>
                                                        }
                                                        {venue.meta.pets && 
                                                            <i className="fa-solid fa-paw"/>
                                                        }
                                                        {venue.meta.breakfast &&
                                                            <i className="fa-solid fa-mug-saucer"/>
                                                        }
                                                        {venue.meta.parking &&
                                                            <i className="fa-solid fa-square-parking"/>
                                                        }
                                                </MetasWrap>
                                                <h3>Current reservations for this venue</h3>
                                                <div>
                                                    {
                                                    venue.bookings.map((booking) => {
                                                        return (
                                                            <div key={booking.id}>
                                                                <p>
                                                                    <Bold>From</Bold>{useFormatDate(booking.dateFrom)}
                                                                    <Bold>to</Bold>{useFormatDate(booking.dateTo)}
                                                                </p>
                                                                <p>Guests <Bold>{booking.guests}</Bold></p>
                                                            </div>
                                                        )
                                                    })
                                                    }
                                                    <p>Last updated: {useFormatDate(venue.updated)}</p>
                                                </div>
                                            </DetailsWrap>
                                    </FlexWrap>
                                </div>
                            )
                        })}
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