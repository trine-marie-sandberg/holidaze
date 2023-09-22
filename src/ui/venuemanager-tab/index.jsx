import { useState, useEffect } from "react";
import useSave, { useLoad } from "../../hooks/storage";
import useFetch, { useSendData } from "../../hooks/api";
import ListVenueForm from "../list-venue";

export default function VenueManagerTab(props) {

    const [
        initialVenues,
        setInitialVenues,
        isManager,
        setIsManager,
    ] = props.children;
    console.log(initialVenues);
    const user = useLoad("user");
    const [ formVisible, setFormVisible ] = useState(false);
    
    return(
        <div>
            {isManager &&
                <div>
                    <h2>My venues</h2>
                    {initialVenues <= 0 &&
                        <div>
                            <p>Currently no venues</p>
                            <button onClick={() => {
                                setFormVisible(true);
                            }}>
                                Create a new listing
                            </button>
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
                    {initialVenues &&
                    <div>
                        <button onClick={() => {
                            setFormVisible(true);
                        }}>
                            Create a new listing
                        </button>
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
                        <div>{initialVenues.venues.map((venue) => {
                            return(
                                <div key={venue.id}>
                                    <h2>{venue.name}</h2>
                                    <button onClick={() => {
                                        setMethod("PUT")
                                        setFormVisible(true)
                                        console.log("click")
                                    }}>
                                        <i className="fa-solid fa-pen-clip"></i>
                                    </button>
                                </div>
                            )
                        })}</div>
                    </div>
                    }
                    {initialVenues > 0 &&
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