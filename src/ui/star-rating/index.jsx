import { useState } from "react";
import { RatingStars, RatingCounter, LabelStar, InputStar, RatingWrap } from "./style";

export default function StarRating() {

    const [ isChecked, setChecked ] = useState(false);
    const [ rating, setRating ] = useState(0);

    return(
        <RatingWrap>
            <RatingStars>
                <LabelStar htmlFor="rs0">
                    <InputStar type="radio" name="rating" id="rs0" onChange={() => setRating(() => 0 +1)} />
                </LabelStar>
                <LabelStar htmlFor="rs1">
                    <InputStar type="radio" name="rating" id="rs1" onChange={() => setRating(() => 0 +2)} />
                </LabelStar>
                <LabelStar htmlFor="rs2">
                    <InputStar type="radio" name="rating" id="rs2" onChange={() => setRating(() => 0 +3)} />
                </LabelStar>
                <LabelStar htmlFor="rs3">
                    <InputStar type="radio" name="rating" id="rs3" onChange={() => setRating(() => 0 +4)} />
                </LabelStar>
                <LabelStar htmlFor="rs4">
                    <InputStar type="radio" name="rating" id="rs4" onChange={() => setRating(() => 0 +5)} />
                </LabelStar>
                <LabelStar htmlFor="rs5">
                    <InputStar type="radio" name="rating" id="rs5" onChange={() => setRating(() => 0 +6)} />
                </LabelStar>
            </RatingStars>
            <RatingCounter id="reting-counter">
              <p>{rating}</p>
            </RatingCounter>
        </RatingWrap>
    )
}

//https://blog.logrocket.com/building-custom-checkbox-react/ 