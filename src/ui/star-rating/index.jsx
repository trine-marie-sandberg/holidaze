import { useEffect, useState } from "react";
import { RatingStars, LabelStar, InputStar, RatingWrap } from "./style";

export default function StarRating(props) {

    const [ isChecked, setChecked ] = useState(false);
    const [ rating, setRating ] = useState(0);
    const r = props.children;
    useEffect(() => r(rating), []);
    return(
        <RatingWrap>
            <RatingStars>
                <LabelStar htmlFor="rs0">
                    <InputStar type="radio" name="rating" id="rs0" onChange={() => r(() => 0 +1)} />
                </LabelStar>
                <LabelStar htmlFor="rs1">
                    <InputStar type="radio" name="rating" id="rs1" onChange={() => r(() => 0 +2)} />
                </LabelStar>
                <LabelStar htmlFor="rs2">
                    <InputStar type="radio" name="rating" id="rs2" onChange={() => r(() => 0 +3)} />
                </LabelStar>
                <LabelStar htmlFor="rs3">
                    <InputStar type="radio" name="rating" id="rs3" onChange={() => r(() => 0 +4)} />
                </LabelStar>
                <LabelStar htmlFor="rs4">
                    <InputStar type="radio" name="rating" id="rs4" onChange={() => r(() => 0 +5)} />
                </LabelStar>
                <LabelStar htmlFor="rs5">
                    <InputStar type="radio" name="rating" id="rs5" onChange={() => r(() => 0 +6)} />
                </LabelStar>
            </RatingStars>
        </RatingWrap>
    )
}

//https://blog.logrocket.com/building-custom-checkbox-react/ 