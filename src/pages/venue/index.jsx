import PageWrapper from "../../ui/pagewrapper";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/api";
import { ImagesWrap, Image, Flex, VenueWrap, BackBtn, BackArrow, MetaIcon, DescriptionWrap, BackHeadingWrap, Heading, ArrowLeft, ArrowRight } from "./style";
import CreateStars from "../../ui/stars";
import { useState } from "react";

export default function VenueDetailsPage() {

    const [ imgIndex, setImgIndex ] = useState(0);

    function nextImage(array) {
        if(imgIndex > array.length -2) {
            setImgIndex(0);
        } else {
            setImgIndex(imgIndex + 1);
        }
    }
    function previousImage(array) {
         if(imgIndex === 0) {
            setImgIndex(array.length -1);
        } else if(imgIndex > array.length -1) {
            setImgIndex(0);
        } else {
            setImgIndex(imgIndex - 1);
        }
    }

    try {
        let params = useParams();
        const id = params.id;
        const navigate = useNavigate();
        const url = `https://api.noroff.dev/api/v1/holidaze/venues/${id}`;
        const { data, loading, error } = useFetch(url);
        const star = CreateStars(data.rating);
        let arrowFade = "";
        
        let address;
        let city;
        let zip;
        let contry;
        let continent;
        let description = "No description";
        if(data) {
            address = data.location.address;
            city = data.location.city;
            zip = data.location.zip;
            contry = data.location.contry;
            continent = data.location.continent;
            description = data.description;
            if(data.media.length < 2) {
                arrowFade = "arrow-faded";
            }
        }
    
        return(
            <PageWrapper>
                {loading && <p>Loading</p>}
                {data && 
                    <VenueWrap>
                        <BackHeadingWrap>
                            <BackBtn onClick={() => navigate(-1)}>
                                 <BackArrow className="fa-solid fa-reply"></BackArrow>
                                 Back
                            </BackBtn>
                            <Heading>{data.name}</Heading>
                        </BackHeadingWrap>
                        <ImagesWrap>
                             <ArrowLeft className="fa-solid fa-circle-chevron-left" id={arrowFade} onClick={() => previousImage(data.media)}></ArrowLeft>
                             {data.media.length <= 0 ? (
                                <Image
                                src="/placeholder-img.jpg"
                                alt="Placeholder image"
                                title="No image was found"
                                />
                            ) : (
                                <Image
                                src={data.media[imgIndex]}
                                alt={data.name}
                                title={data.name}
                                />
                            )}
                             <ArrowRight className="fa-solid fa-circle-chevron-right" id={arrowFade} onClick={() => nextImage(data.media)}></ArrowRight>
                        </ImagesWrap>
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
                            <p>Price: ${data.price}/night</p>
                            <p>Max guests: {data.maxGuests}</p> 
                            <p>{description}</p>
                            <p>Last updated: {data.updated}</p>
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