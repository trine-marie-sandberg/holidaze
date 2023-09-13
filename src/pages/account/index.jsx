import { Link } from "react-router-dom";
import { useLoad } from "../../hooks/storage";
import PageWrapper from "../../ui/pagewrapper";
import { AccountContainer, BookingVenueContainer, BookingVenueWrap, FlexWrap, UpdateBtn, UpdateIcon } from "./style";
import { useState } from "react";

export default function AccountPage() {
    const user = useLoad("user");
    const [ isManager, setIsManager ] = useState(user.manager);
    let manager = "No";
    if(isManager === true) manager = "Yes"
    return(
        <PageWrapper>
            <AccountContainer>
                <BookingVenueContainer>
                    <BookingVenueWrap>
                        <div>
                            <h2>My bookings</h2>
                            <div>
                                <p>Currently no bookings</p>
                            </div>
                        </div>
                    </BookingVenueWrap>
                </BookingVenueContainer>
                <div>
                    <h1>Hi, {user.name}</h1>
                    <p>You have currently no reservations.</p>
                    <Link to="/venues">
                        <p>Look for venues</p>
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
                </div>
            </AccountContainer>
        </PageWrapper>
    )
}