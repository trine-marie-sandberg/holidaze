import PageWrapper from "../../ui/pagewrapper";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/api";
import { ImageGrid, Image, Flex, VenueWrap, BackBtn, BackArrow, MetaIcon, DescriptionWrap } from "./style";
import CreateStars from "../../ui/stars";

export default function VenueDetailsPage() {
    try {
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
                {loading && <p>Loading</p>}
                {data && 
                    <VenueWrap>
                        <BackBtn onClick={() => navigate(-1)}>
                            <BackArrow className="fa-solid fa-reply"></BackArrow>
                            <p>Back</p>
                        </BackBtn>
                        <Flex>
                            <h1>{data.name}</h1>
                            <p>Price: ${data.price}/night</p>
                        </Flex>
                        <ImageGrid>
                            <Image src={data.media}></Image>
                        </ImageGrid>
                        <DescriptionWrap>
                            <Flex>
                                <p><i className="fa-solid fa-location-dot"></i> Location: {address} {city} {zip}, {contry} {continent}</p>
                                <Flex>
                                    <p>Rating: </p>
                                    <Flex>{star}</Flex>
                                </Flex>
                            </Flex>
                            <Flex>
                                <h2>Description</h2>
                                <Flex>
                                    <p>Included: </p>
                                    <div>{data.meta.wifi && <MetaIcon className="fa-solid fa-wifi" aria-label="wifi included" />}</div>
                                    <div>{data.meta.pets && <MetaIcon className="fa-solid fa-paw" aria-label="pets allowed" />}</div>
                                    <div>{data.meta.parking && <MetaIcon className="fa-solid fa-square-parking" aria-label="parking included" />}</div>
                                    <div>{data.meta.breakfast && <MetaIcon className="fa-solid fa-mug-saucer" aria-label="breakfast included" />}</div>
                                </Flex>
                            </Flex>
                            <p>Max guests: {data.maxGuests}</p> 
                            <p>{description}</p>
                        </DescriptionWrap>
                    </VenueWrap>
                }
                {error && <p>error</p>}
            </PageWrapper>
        )
    }
    catch(error) {
        //Log here for troubleshooting
    }
}