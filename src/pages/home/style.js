import { styled } from "styled-components";

export const BgImg = styled.div`
  height: 100%;
  background-image: url("/boat.jpg");
  background-size: cover;
  @media (max-width: 1200px) {
   background-image: url("/boat-pad.jpg");
  }
  @media (max-width: 800px) {
   background-image: url("/boat-mobile.jpg");
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
  padding-top: 115px;
  @media (max-width: 400px) {
    padding-top: 128px;
  }
`;
export const I = styled.i`
  font-size: ${(props) => props.theme.sizes.med};
  padding: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.font};
  @media (max-width: 300px) {
   padding: ${(props) => props.theme.sizes.xs};
  }
`;
export const FrontPageWrap = styled.div`
padding: ${(props) => props.theme.sizes.med};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//search
export const SearchField = styled.input`
  width: 40vw;
  max-width: 500px;
  padding: 10px;
  border: none;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const HideLabel = styled.label`
  display: none;
`;
export const SearchWrap = styled.form`
  display: flex;
  align-items: center;
`;
export const CloseBtn = styled.button`
  color: white;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid white;
  border-radius: 100%;
  padding: 0 8px 0 8px;
  width: fit-content;
  margin-left: 15px;
  cursor: pointer;
`;
//Search results
export const ResultsBox = styled.div`
  background-color: ${(props) => props.theme.color.darker};
  overflow-y: scroll;
  max-height: 100%;
  width: 100%;
  position: absolute;
  top: 380px;
  display: flex;
  justify-content: center;
  //min
  @media (min-width: 800px) {
    top: 425px;
  }
  @media (min-width: 1900px) {
    top: 44%;
  }
  & div {
    color: ${(props) => props.theme.color.black};
  }
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.color.font};
  }
  & a:visited {
    color: rgb(204, 211, 216);
  }
`;
export const ResultsWrap = styled.div`
  width: 50%;
  max-width: 700px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  @media(max-width: 700px) {
    width: 100%;
  }
`;
export const TextBgImgWrap = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding-top: ${(props) => props.theme.sizes.med};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const TextWrap = styled.div`
  padding: ${(props) => props.theme.sizes.med};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const Metas = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  & p, i {
    padding: 5px;
  }
`;
export const BackgroundImages = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  height: 100vw;
  max-height: 350px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  margin-top: 15px;
`;