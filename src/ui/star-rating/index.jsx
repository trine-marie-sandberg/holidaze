import { useEffect } from "react";
import { RatingStars, LabelStar, InputStar, RatingWrap, InputClear } from "./style";

export default function StarRating(props) {

    const [ rating, setRating ] = props.children;
    return(
        <RatingWrap>
            <RatingStars>
                <LabelStar htmlFor="clear">
                    <i className="fa-solid fa-circle-xmark"></i>
                    <InputClear type="radio" name="rating" id="clear" onChange={() => setRating(0)} />
                </LabelStar>
                <LabelStar htmlFor="rs0">
                    <InputStar type="radio" name="rating" id="rs0" onChange={() => setRating(1)} />
                </LabelStar>
                <LabelStar htmlFor="rs1">
                    <InputStar type="radio" name="rating" id="rs1" onChange={() => setRating(2)} />
                </LabelStar>
                <LabelStar htmlFor="rs2">
                    <InputStar type="radio" name="rating" id="rs2" onChange={() => setRating(3)} />
                </LabelStar>
                <LabelStar htmlFor="rs3">
                    <InputStar type="radio" name="rating" id="rs3" onChange={() => setRating(4)} />
                </LabelStar>
                <LabelStar htmlFor="rs4">
                    <InputStar type="radio" name="rating" id="rs4" onChange={() => setRating(5)} />
                </LabelStar>
            </RatingStars>
        </RatingWrap>
    )
}

//https://blog.logrocket.com/building-custom-checkbox-react/ 