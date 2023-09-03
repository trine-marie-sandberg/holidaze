import { EmptyStar, Star, Wrap } from "./style";

export default function CreateStars(rating) {
    let stars = [];
    let keys = [1, 2, 3, 4, 5, 6]
    for(let i = 0; i < rating; i++) {
        stars.push(<i key={keys[i]} aria-label={"star" + keys[i]}><Star /></i>);
    }
    if(rating === 0) {
        stars.push(
          <Wrap key="0">
             <EmptyStar aria-label="no stars" />
             <p>Not rated</p>
          </Wrap>
        );
    }
    return stars;
  }