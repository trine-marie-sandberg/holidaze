import { CardWrap, CardsGrid, Image, Position, StarsPositionWrap, Wrap } from "./styled";
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
                        return(
                            <CardWrap key={data.id}>
                                <Link to={`/venue/${data.id}`}>
                                    <Wrap>
                                        <h2>{data.name}</h2>
                                        <p>${data.price}</p>
                                    </Wrap>
                                    <Image style={{ 
                                    backgroundImage: `url(${data.media[0]})` 
                                    }}>
                                    </Image>
                                    <StarsPositionWrap>
                                    <Wrap>{...stars}</Wrap>
                                    <Position><i className="fa-solid fa-location-dot"></i> {data.location.country}</Position>
                                    </StarsPositionWrap>
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