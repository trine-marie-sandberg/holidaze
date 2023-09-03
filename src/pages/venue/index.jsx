import PageWrapper from "../../ui/pagewrapper";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/api";
import { ImageGrid, Image, Flex, VenueWrap, BackBtn, BackArrow } from "./style";
import CreateStars from "../../ui/stars";

export default function VenueDetailsPage() {
    let params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const url = `https://api.noroff.dev/api/v1/holidaze/venues/${id}`;
    const { data, loading, error } = useFetch(url);

    const star = CreateStars(data.rating)
    console.log(data)
    let address;
    let city;
    let zip;
    let contry;
    let continent;
    let description = "No description";
    if(data.location) {
        address = data.location.address;
        city = data.location.city;
        zip = data.location.zip;
        contry = data.location.contry;
        continent = data.location.continent;
    }
    if(data.description) {
        description = data.description;
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
            <VenueWrap>
                <BackBtn onClick={() => navigate(-1)}>
                    <BackArrow className="fa-solid fa-reply"></BackArrow>
                    <p>Back</p>
                </BackBtn>
                <Flex>
                    <h1>{data.name}</h1>
                    <p>${data.price}/night</p>
                </Flex>
                <ImageGrid>
                    <Image src={data.media}></Image>
                </ImageGrid>
                <div>
                    <Flex>
                        <p><i className="fa-solid fa-location-dot"></i> Location: {address} {city} {zip}, {contry} {continent}</p>
                        <Flex>
                            <p>Rating: </p>
                            <Flex>{star}</Flex>
                        </Flex>
                    </Flex>
                    
                    <h2>Description</h2>
                    <p>{description}</p>
                </div>
            </VenueWrap>
        </PageWrapper>
    )
}