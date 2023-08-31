import { styled } from "styled-components";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns:  repeat( auto-fill, minmax(350px, 1fr));
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  padding:  ${(props) => props.theme.sizes.sm};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const CardWrap = styled.div`
  border: solid 2px ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.dark};
  margin: ${(props) => props.theme.sizes.xs};
  padding: ${(props) => props.theme.sizes.sm} 0;
  margin: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.562) 0px 5px 15px;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 200px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  max-height: ${(props) => props.theme.sizes.card};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;