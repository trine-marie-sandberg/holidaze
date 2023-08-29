import { styled } from "styled-components";

export const RatingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: rgba(0, 0, 0, 0.3);
`;
export const RatingStars = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.black};
  position: relative;
  & input:where([type="checkbox"], [type="radio"]) {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 4px;
    background-color: rgba(255, 165, 0, 0.3);
  }
  & input:where([type="checkbox"], [type="radio"]):where(:active:not(:disabled), :focus) {
    background-image: linear-gradient(white, yellow, orange);
    outline: none;
  }
  & input:where([type="checkbox"], [type="radio"]):hover {
    background-image: linear-gradient(white, yellow, orange);
  }
`;
export const RatingCounter = styled.div`
  font-size: ${(props) => props.theme.sizes.sm};
  padding: ${(props) => props.theme.sizes.xs};
  text-align: center;
`;
export const LabelStar = styled.label`
`;
export const InputStar = styled.input`
  cursor: pointer;
  width: ${(props) => props.theme.sizes.sm};
  height: ${(props) => props.theme.sizes.sm};
  clip-path: polygon(50% 0%, 66% 32%, 100% 38%, 78% 64%, 83% 100%, 50% 83%, 17% 100%, 22% 64%, 0 38%, 34% 32%);
  /* background-color: rgba(255, 165, 0, 0.3);
  background-size: 205% 100%;
	background-position: 0 0;
  & :where([type="radio"]):where(:active:not(:disabled), :focus) {
    background-image: linear-gradient(90deg, yellow, orange 30% 50%, #184580 50%, 70%, #173a75 100%);
    outline: none;
  }
  & :disabled {
    background-color: blue !important;
  }
  & :hover {
    background-image: linear-gradient(90deg, yellow, orange 30% 50%, #184580 50%, 70%, #173a75 100%);
  } */
`;

//how to style: https://iamkate.com/code/checkboxes-and-radio-buttons/ 