import { Link } from "react-router-dom";
import { useLoad } from "../../hooks/storage";
import PageWrapper from "../../ui/pagewrapper";
import { AccountContainer, AccountInfoWrap, BookVenueBtn, BookingVenueContainer, BookingVenueWrap, FlexWrap, UpdateBtn, UpdateIcon } from "./style";
import { useState, useEffect } from "react";
import BookingsTab from "../../ui/bookings-tab";
import VenueManagerTab from "../../ui/venuemanager-tab";
import useFetch from "../../hooks/api";

export default function AccountPage() {
    const [ bookings, setBookings ] = useState(true);
    const [ bookingsActive, setBookingsActive ] = useState("active-btn");
    const [ venues, setVenues ] = useState(false);
    const [ venuesActive, setVenuesActive ] = useState("");
    const user = useLoad("user");
    const [ isManager, setIsManager ] = useState(user.manager);
    let manager = "No";
    if(isManager === true) manager = "Yes";
    
    function displayBookings() {
        setBookingsActive("active-btn");
        setVenues(false);
        setBookings(true);
        setVenuesActive("");
    }
    function displayVenues() {
        setVenuesActive("active-btn");
        setBookings(false);
        setVenues(true);
        setBookingsActive("");
    }
    const fetchOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
        },
    }
    const { data, load, error } = useFetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${user.name}?_bookings=true&_venues=true`, fetchOptions);
    const [ initialBookings, setInitialBookings ] = useState([]);
    useEffect(() => setInitialBookings(data.bookings), [data]);
    
    return(
        <PageWrapper>
            <AccountContainer>
                <BookingVenueContainer>
                    <FlexWrap>
                        <BookVenueBtn 
                          onClick={displayBookings}
                          id={bookingsActive}
                          aria-label="Display my bookings tab">
                            Bookings
                        </BookVenueBtn>
                        <BookVenueBtn
                          onClick={displayVenues}
                          id={venuesActive}
                          aria-label="Display venue manager tab">
                            Venues
                        </BookVenueBtn>
                    </FlexWrap>
                    {bookings && 
                    <BookingVenueWrap>
                        <BookingsTab>
                            {initialBookings}
                            {setInitialBookings}
                        </BookingsTab>
                    </BookingVenueWrap>
                    }
                    {venues && 
                    <BookingVenueWrap>
                        <VenueManagerTab>
                        {isManager}
                        {setIsManager}
                        </VenueManagerTab>
                    </BookingVenueWrap>
                    }
                </BookingVenueContainer>
                <AccountInfoWrap>
                    <h1>Hi, {user.name}</h1>
                    <p>
                        Thank you for using Holidayz's services.
                        If you want to chat with uss about your next holiday, 
                        please use our contact form:
                    </p>
                    <Link to="/contact">
                        <p>Contact form</p>
                    </Link>
                    <FlexWrap>
                        <h2>My account information</h2>
                        <UpdateBtn>Update <UpdateIcon className="fa-solid fa-pen-clip"></UpdateIcon></UpdateBtn>
                    </FlexWrap>
                    <ul>
                        <li>Username: {user.name}</li>
                        <li>Email: {user.email}</li>
                        <li>Venue manager: {manager}</li>
                    </ul>
                </AccountInfoWrap>
            </AccountContainer>
        </PageWrapper>
    )
}