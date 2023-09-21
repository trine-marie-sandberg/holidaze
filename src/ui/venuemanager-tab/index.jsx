import { useState, useEffect } from "react";
import { useLoad } from "../../hooks/storage";
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
    const [ formVisible, setFormVisible ] = useState(false);
    const user = useLoad("user");
    
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
                                    {setInitialVenues}
                                </ListVenueForm>
                            </div>
                            }
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
                            }}}>
                        Become a venue manager
                    </button>
                </div>
            }
        </div>
    )
}