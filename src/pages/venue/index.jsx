import PageWrapper from "../../ui/pagewrapper";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/api";
import { ImagesWrap, Image, Flex, VenueWrap, Btn, BtnIcon, MetaIcon, DescriptionWrap, BtnHeadingWrap, Heading, ArrowLeft, ArrowRight, TopLinkWrap, DetailsWrap, CalendarContainer, ReserveBtn, BookCloseWrap, CalendarBg, CloseBtn } from "./style";
import CreateStars from "../../ui/stars";
import { useEffect, useState } from "react";
import DatePicker from "../../ui/calendar";
import { useLoad } from "../../hooks/storage";

export default function VenueDetailsPage() {

    const [ imgIndex, setImgIndex ] = useState(0);
    const [ bookings, setBookings ] = useState([]);
    const [ newBooking, setNewBooking ] = useState({});
    const [ visibleBooking, setVisibleBooking ] = useState(false);
    const [ logedOutMessage, setLogedOutMessage ] = useState(false);
    const navigate = useNavigate();

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
        const url = `https://api.noroff.dev/api/v1/holidaze/venues/${id}?_owner=true&_bookings=true`;
        const { data, loading, error } = useFetch(url);
        useEffect(() => setBookings(data.bookings), [data]);
        const star = CreateStars(data.rating);
        let arrowFade = "";
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
            description = data.description;
            if(data.media.length < 2) {
                arrowFade = "arrow-faded";
            }
        }
        return(
            <PageWrapper>
                {loading && <h2>Loading . . .</h2>}
                {error  && <h2>Error: Could not load content</h2>}
                {data && 
                    <VenueWrap>
                        <BtnHeadingWrap>
                        <Heading>{data.name}</Heading>
                            <TopLinkWrap>
                            <Link onClick={() => navigate(-1)}>
                                <Btn><BtnIcon className="fa-solid fa-reply"></BtnIcon>Back</Btn>
                            </Link>
                            <Link to={"/venues"}>
                              <Btn><BtnIcon className="fa-solid fa-bed"></BtnIcon>All venues</Btn>
                            </Link>
                            </TopLinkWrap>
                        </BtnHeadingWrap>
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
                            <Flex>
                                <DetailsWrap>
                                    <Flex>
                                        <p>Price: ${data.price}/night</p>
                                        <ReserveBtn onClick={() => {
                                            let getUser = useLoad("user");
                                            if(getUser) {
                                                setVisibleBooking(true);
                                                setLogedOutMessage(false);
                                            } if(!getUser) {
                                                setVisibleBooking(false);
                                                alert("please log in to access the calendar")
                                                setLogedOutMessage(true);
                                            }
                                        }}>
                                            Booking <i className="fa-regular fa-calendar-check"></i>
                                        </ReserveBtn>
                                    </Flex>
                                    <p>Max guests: {data.maxGuests}</p> 
                                    <p>{description}</p>
                                    <p>Last updated: {data.updated}</p>
                                </DetailsWrap>
                                {visibleBooking &&
                                    <CalendarContainer>
                                        <CalendarBg>
                                            <BookCloseWrap>
                                                <h2>Booking calendar</h2>
                                                <CloseBtn onClick={() => {
                                                setVisibleBooking(false)
                                                }}>
                                                    <i className="fa-solid fa-xmark"></i>
                                                </CloseBtn>
                                            </BookCloseWrap>
                                            <DatePicker>
                                                {bookings}
                                                {setBookings}
                                                {newBooking}
                                                {setNewBooking}
                                                {id}
                                            </DatePicker>
                                        </CalendarBg>
                                    </CalendarContainer>
                                }
                            </Flex>
                        </DescriptionWrap>
                    </VenueWrap>
                }
            </PageWrapper>
        )
    }
    catch(error) {
        //Log here for troubleshooting
    }
}