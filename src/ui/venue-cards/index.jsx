import { CardWrap, CardsGrid, Image } from "./styled"

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
                        return(
                            <CardWrap key={data.id}>
                                <div>
                                    <h2>{data.name}</h2>
                                    <p>{data.price}</p>
                                </div>
                                <Image style={{ 
                                  backgroundImage: `url(${data.media[0]})` 
                                }}>
                                </Image>
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