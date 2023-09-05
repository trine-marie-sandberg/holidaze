import { useEffect } from "react";
import { RatingStars, LabelStar, InputStar, RatingWrap } from "./style";

export default function StarRating(props) {

    const initialRating = 0;
    const updateRating = props.children;
    useEffect(() => updateRating(initialRating), []);
    return(
        <RatingWrap>
            <RatingStars>
                <LabelStar htmlFor="rs0">
                    <InputStar type="radio" name="rating" id="rs0" onChange={() => updateRating(1)} />
                </LabelStar>
                <LabelStar htmlFor="rs1">
                    <InputStar type="radio" name="rating" id="rs1" onChange={() => updateRating(2)} />
                </LabelStar>
                <LabelStar htmlFor="rs2">
                    <InputStar type="radio" name="rating" id="rs2" onChange={() => updateRating(3)} />
                </LabelStar>
                <LabelStar htmlFor="rs3">
                    <InputStar type="radio" name="rating" id="rs3" onChange={() => updateRating(4)} />
                </LabelStar>
                <LabelStar htmlFor="rs4">
                    <InputStar type="radio" name="rating" id="rs4" onChange={() => updateRating(5)} />
                </LabelStar>
                <LabelStar htmlFor="rs5">
                    <InputStar type="radio" name="rating" id="rs5" onChange={() => updateRating(6)} />
                </LabelStar>
            </RatingStars>
        </RatingWrap>
    )
}

//https://blog.logrocket.com/building-custom-checkbox-react/ 