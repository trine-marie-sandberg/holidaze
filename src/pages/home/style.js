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
  padding: 0 10vw;
  background-color: rgba(3, 17, 26, 0.6);
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
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.light};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  @media (max-width: 800px) {
   width: 50vw;
  }
`;
export const HideLabel = styled.label`
  display: none;
`;
export const Btn = styled.button`
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.secondary};
  border: 1px solid ${(props) => props.theme.color.light};
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 45px;
`;