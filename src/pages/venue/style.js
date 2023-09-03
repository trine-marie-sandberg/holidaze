import { styled } from "styled-components";

export const VenueWrap = styled.div`
  padding: ${(props) => props.theme.sizes.sm};
`;
export const ImageGrid = styled.div`
  /* display: grid;
  grid-template-columns:  repeat( auto-fill, minmax(550px, 1fr) ); */
  display: flex;
  flex-wrap: wrap;
`;
export const Image = styled.img`
  height: auto;
  width: 100%;
  max-width: 80vw;
  max-height: 600px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const BackBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.font};
  width: fit-content;
  padding: 1px ${(props) => props.theme.sizes.med};
  border: 2px solid ${(props) => props.theme.color.dark};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  &:hover {
    border: 2px solid ${(props) => props.theme.color.primary};
    transition: all 200ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 15px;
  }
`;
export const BackArrow = styled.i`
  padding-right: ${(props) => props.theme.sizes.xs};
`;