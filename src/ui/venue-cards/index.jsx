import { CardWrap, CardsGrid, HeadingCards, Image, Metas, Position, StarsPositionWrap, Wrap } from "./styled";
import CreateStars from "../stars";
import { Link } from "react-router-dom";

export default function VenueCards(props) {

    if(props.children.status === "Not Found") {
        return(
            console.log("Children not found: " + props.status)
        )
    }
    if(props.children.length > 0) {
        return(
            <CardsGrid>
                {props.children.map((data) => {
                    try {
                        const stars = CreateStars(data.rating, data.stars);
                        let imageSrc = data.media[0];
                        if(data.media.length < 1) {
                            imageSrc = "/placeholder-img.jpg";
                        }
                        return(
                            <CardWrap key={data.id}>
                                <Link to={`/venue/${data.id}`}>
                                    <Wrap>
                                        <HeadingCards>{data.name}</HeadingCards>
                                        <p>${data.price}/night</p>
                                    </Wrap>
                                    <Image style={{ 
                                    backgroundImage: `url(${imageSrc})` 
                                    }}>
                                    </Image>
                                    <StarsPositionWrap>
                                    <Wrap>{...stars}</Wrap>
                                    <Position><i className="fa-solid fa-location-dot"></i> {data.location.country}</Position>
                                    </StarsPositionWrap>
                                    <Wrap>
                                        <Metas>Max guests: {data.maxGuests}</Metas>
                                        {data.meta.wifi &&
                                          <i className="fa-solid fa-wifi"></i>
                                        }
                                        {data.meta.pets && 
                                          <i className="fa-solid fa-paw"></i>
                                        }
                                        {data.meta.breakfast &&
                                          <i className="fa-solid fa-mug-saucer"></i>
                                        }
                                        {data.meta.parking &&
                                          <i className="fa-solid fa-square-parking"></i>
                                        }
                                    </Wrap>
                                </Link>
                            </CardWrap>
                        )
                    }
                    catch(error) {
                        console.log(error)
                        return(
                            <p>{error}</p>
                        )
                    }
                })}
            </CardsGrid>
        )
    }
    else {}
}