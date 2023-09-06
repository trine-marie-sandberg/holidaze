import { useEffect } from "react";
import { RatingStars, LabelStar, InputStar, RatingWrap, InputClear } from "./style";

export default function StarRating(props) {

    const initialRating = 0;
    const updateRating = props.children;
    useEffect(() => updateRating(initialRating), []);
    return(
        <RatingWrap>
            <RatingStars>
                <LabelStar htmlFor="clear">
                    <i className="fa-solid fa-circle-xmark"></i>
                    <InputClear type="radio" name="rating" id="clear" onChange={() => updateRating(0)} />
                </LabelStar>
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
            </RatingStars>
        </RatingWrap>
    )
}

//https://blog.logrocket.com/building-custom-checkbox-react/ 