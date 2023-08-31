import { styled } from "styled-components";

export const Star = styled.div`
  background-color: ${(props) => props.theme.color.font};
  margin-left: ${(props) => props.theme.sizes.xs};
  width: ${(props) => props.theme.sizes.sm};
  height: ${(props) => props.theme.sizes.sm};
  clip-path: polygon(50% 0%, 66% 32%, 100% 38%, 78% 64%, 83% 100%, 50% 83%, 17% 100%, 22% 64%, 0 38%, 34% 32%);
`;
export const EmptyStar = styled.i`
  background-color: rgba(255,255,255, 0.5);
  margin-left: ${(props) => props.theme.sizes.xs};
  margin-right: ${(props) => props.theme.sizes.xs};
  width: ${(props) => props.theme.sizes.sm};
  height: ${(props) => props.theme.sizes.sm};
  clip-path: polygon(50% 0%, 66% 32%, 100% 38%, 78% 64%, 83% 100%, 50% 83%, 17% 100%, 22% 64%, 0 38%, 34% 32%);
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;