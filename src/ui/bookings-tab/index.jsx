import { useLoad } from "../../hooks/storage";
import useFetch from "../../hooks/api";

export default function BookingsTab() {
    const user = useLoad("user");
    const fetchOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
        },
    }
    const { data, load, error } = useFetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${user.name}`, fetchOptions);
    //console.log(data)
    return(
        <div>
            <h2>My bookings</h2>
            <p>Currently no bookings</p>
        </div>
    )
}