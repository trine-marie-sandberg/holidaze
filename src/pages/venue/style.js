import { styled } from "styled-components";

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