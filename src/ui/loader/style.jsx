import { styled, keyframes } from "styled-components";

const animation = keyframes`
  50% { box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px }
  100% { box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px }
`;
export const StyleLoader = styled.div`
  align-self: center;
  color: ${(props) => props.theme.color.secondary};
  width: 3px;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: ${animation} 0.5s infinite alternate linear;
`;

//https://codepen.io/rajanchaudhari08/pen/xxQKMRa