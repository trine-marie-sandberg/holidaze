import PageWrapper from "../../ui/pagewrapper";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/api";
import { ImageGrid, Image } from "./style";

export default function VenueDetailsPage() {
    let params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const url = `https://api.noroff.dev/api/v1/holidaze/venues/${id}`;
    const { data, loading, error } = useFetch(url);

    console.log(data)
    let address;
    let city;
    let zip;
    let contry;
    let continent;
    if(data.location) {
        address = data.location.address;
        city = data.location.city;
        zip = data.location.zip;
        contry = data.location.contry;
        continent = data.location.continent;
    }

    // {listing.media.length <= 0 ? (
    //     <s.VenueImage
    //       src={venueImagePlaceholder}
    //       alt="Placeholder image"
    //       title="No image was found"
    //     />
    //   ) : (
    //     <s.VenueImage
    //       src={listing.media[0]}
    //       alt={listing.name}
    //       title={listing.name}
    //     />
    //   )}

    return(
        <PageWrapper>
            <h1>{data.name}</h1>
            <ImageGrid>
                <Image src={data.media}></Image>
            </ImageGrid>
            <div>
                <p>Location: {address && address} {city} {zip} {contry} {continent}</p>
            </div>
        </PageWrapper>
    )
}