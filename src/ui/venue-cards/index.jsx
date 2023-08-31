export default function VenueCards(props) {

    if(props.children.status === "Not Found") {
        return(
            console.log("Children not found: " + props.status)
        )
    }
    if(props.children.length > 0) {
        return(
            <div>
                {props.children.map((data) => {
                    try {
                        return(
                            <div key={data.id}>
                                <h2>{data.name}</h2>
                            </div>
                        )
                    }
                    catch(error) {
                        console.log(error)
                        return(
                            <p>{error}</p>
                        )
                    }
                })}
            </div>
        )
    }
    else {}
}