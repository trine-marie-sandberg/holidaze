import { styled } from "styled-components";

export const BgImg = styled.div`
  height: 100%;
  background-image: url("boat.jpg");
  background-size: cover;
  @media (max-width: 1200px) {
   background-image: url("boat-pad.jpg");
  }
  @media (max-width: 800px) {
   background-image: url("boat-mobile.jpg");
  }
`;
export const BgFade = styled.div`
  background-color: rgba(3, 17, 26, 0.6);
  @media (max-width: 400px) {
    & h1 {
      font-size: 25px;
    }
  }
`;
export const FrontPage = styled.div`
  padding: 150px 0;
  @media (max-width: 400px) {
   padding: 70px 0;
  }
`;
export const I = styled.i`
  font-size: ${(props) => props.theme.sizes.med};
  padding: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.font};
  @media (max-width: 800px) {
   padding: ${(props) => props.theme.sizes.xs};
  }
`;
export const FrontPageWrap = styled.div`
padding: ${(props) => props.theme.sizes.med};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchField = styled.input`
  width: 40vw;
  max-width: 500px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const HideLabel = styled.label`
  display: none;
`;
export const SearchWrap = styled.form`
  display: flex;
  align-items: center;
`;
export const ResultsBox = styled.div`
  overflow-y: scroll;
  max-height: 47vh;
  width: 100%;
  position: absolute;
  top: 45%;
`;
export const ResultWrap = styled.div`
  background-color: ${(props) => props.theme.color.darker};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

//
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