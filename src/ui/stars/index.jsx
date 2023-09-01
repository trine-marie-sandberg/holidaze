import { EmptyStar, Star, Wrap } from "./style";

export default function CreateStars(rating) {
    let stars = [];
    for(let i = 0; i < rating; i++) {
        stars.push(<i><Star /></i>);
    }
    if(rating === 0) {
        stars.push(
          <Wrap>
             <EmptyStar />
             <p>Not rated</p>
          </Wrap>
        );
    }
    return stars;
  }