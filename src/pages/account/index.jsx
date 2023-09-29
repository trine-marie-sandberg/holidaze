import { Link } from "react-router-dom";
import { useLoad } from "../../hooks/storage";
import PageWrapper from "../../ui/pagewrapper";
import { AccountContainer, AccountInfoWrap, Avatarimg, BookVenueBtn, BookingVenueContainer, BookingVenueWrap, ContactLink, FlexWrap, FormContainer, UpdateBtn, UpdateIcon } from "./style";
import { useState, useEffect } from "react";
import BookingsTab from "../../ui/bookings-tab";
import VenueManagerTab from "../../ui/venuemanager-tab";
import useFetch from "../../hooks/api";
import UpdateAccountForm from "../../ui/update-accountinfo";

export default function AccountPage() {
    const [ bookings, setBookings ] = useState(true);
    const [ bookingsActive, setBookingsActive ] = useState("active-btn");
    const [ venues, setVenues ] = useState(false);
    const [ venuesActive, setVenuesActive ] = useState("");
    const user = useLoad("user");
    const [ isManager, setIsManager ] = useState(user.manager);
    let manager = "No";
    if(isManager === true) manager = "Yes";
    const [ updateFormVisible, setUpdateFormVisible ] = useState(false);
    const [ avatar, setAvatar ] = useState(user.avatar);
    
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
                    <FlexWrap>
                        <h1>Hi, {user.name}</h1>
                        <Avatarimg src={avatar} />
                        <UpdateBtn
                          onClick={() => {
                            setUpdateFormVisible(true);
                          }}
                        >
                            Update or add avatar + <i className="fa-solid fa-circle-user"></i>
                        </UpdateBtn>
                    </FlexWrap>
                    <p>
                        Thank you for using Holidayz's services.
                        If you want to chat with us about your next holiday, 
                        please use this contact form:
                    </p>
                    <ContactLink>
                        <Link to="/contact">
                            <p>Contact form</p>
                        </Link>
                    </ContactLink>
                    <FlexWrap>
                        <h2>My account information</h2>
                        {updateFormVisible &&
                        <FormContainer>
                            <UpdateAccountForm>
                                {setUpdateFormVisible}
                                {setAvatar}
                                {avatar}
                            </UpdateAccountForm>
                        </FormContainer>
                        }
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