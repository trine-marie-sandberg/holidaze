import { styled } from "styled-components";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns:  repeat( auto-fill, minmax(250px, 1fr));
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  padding:  ${(props) => props.theme.sizes.sm};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  margin-top: ${(props) => props.theme.sizes.med};
  @media (min-width: 700px) {
    grid-template-columns:  repeat( auto-fill, minmax(280px, 1fr));
  }
  @media (min-width: 1500px) {
    grid-template-columns:  repeat( auto-fill, minmax(350px, 1fr));
  }
`;
export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 2px ${(props) => props.theme.color.dark};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.primary};
  margin: ${(props) => props.theme.sizes.xs};
  padding: ${(props) => props.theme.sizes.sm} 0;
  margin: 5px;
  max-width: 400px;
  cursor: pointer;
  &:hover {
    transition: all 100ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.562) 0px 5px 15px;
    transform: scale(1.01);
    transform: translateY(-5px);
  }
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.color.font};
  }
  & a:visited {
    color: rgb(204, 211, 216);
  }
`;
export const HeadingCards = styled.h2`
  margin: 0;
`;
export const Image = styled.div`
  width: 100%;
  height: 200px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  max-height: ${(props) => props.theme.sizes.card};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 ${(props) => props.theme.sizes.sm};
`;
export const Star = styled.div`
  background-color: ${(props) => props.theme.color.font};
  width: ${(props) => props.theme.sizes.sm};
  height: ${(props) => props.theme.sizes.sm};
  clip-path: polygon(50% 0%, 66% 32%, 100% 38%, 78% 64%, 83% 100%, 50% 83%, 17% 100%, 22% 64%, 0 38%, 34% 32%);
`;
export const Position = styled.p`
  padding: ${(props) => props.theme.sizes.sm};
  margin: 0;
`;
export const StarsPositionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
export const Metas = styled.p`
  margin: 0;
`;