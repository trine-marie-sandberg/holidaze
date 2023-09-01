import PageWrapper from "../../ui/pagewrapper";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/api";

export default function VenueDetailsPage() {
    let params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const url = `https://api.noroff.dev/api/v1/holidaze/venues/${id}`;
    const { data, loading, error } = useFetch(url);
    console.log(data)
    return(
        <PageWrapper>
            <h1>Venue details</h1>
        </PageWrapper>
    )
}