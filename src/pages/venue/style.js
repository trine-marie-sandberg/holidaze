import { styled } from "styled-components";

export const VenueWrap = styled.div`
  padding: ${(props) => props.theme.sizes.sm};
  max-width: 1200px;
  @media(max-width: 600px) {
    padding: 0;
  }
`;
export const ImagesWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color.font};
  background-color: ${(props) => props.theme.color.darker};
  border-top-right-radius: ${(props) => props.theme.sizes.borderRadius};
  border-top-left-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.darker};
  height: 60vh;
  & {
    font-size: 50px;
    @media(max-width: 1000px) {
      font-size: 45px;
    }
    @media(max-width: 600px) {
      height: 60vw;
      font-size: 30px;
    }
  }
  & #arrow-faded {
    display: none;
  }
`;
export const Image = styled.img`
  height: auto;
  max-height: 100% !important;
  width: auto;
  max-width: 80vw;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.darker};
  animation: fadeIn 5s;
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
`;
export const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  cursor: pointer;
  margin-right: ${(props) => props.theme.sizes.sm};
  left: 25;
  top: 50;
`;
export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
  justify-self: end;
  margin-left: ${(props) => props.theme.sizes.sm};
  right: 25;
  top: 50;
`;
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const BtnHeadingWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  & a {
    text-decoration: none;
  }
`;
export const TopLinkWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Heading = styled.h1`
  padding-left: ${(props) => props.theme.sizes.lg};
  margin: 0;
`;
export const Btn = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.color.font};
  background-color: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.dark};
  padding: ${(props) => props.theme.sizes.sm} ${(props) => props.theme.sizes.lg};
  margin: 5px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  width: fit-content;
  height: fit-content;
  &:hover {
    border: 1px solid ${(props) => props.theme.color.darker};
  }
`;
export const BtnIcon = styled.i`
  padding-right: ${(props) => props.theme.sizes.xs};
`;
export const MetaIcon = styled.i`
  padding: ${(props) => props.theme.sizes.xs};
`;
export const DescriptionWrap = styled.div`
  z-index: 1;
  background-color: ${(props) => props.theme.color.primary};
  padding: ${(props) => props.theme.sizes.sm};
  margin-top: 0px;
  border-end-end-radius: ${(props) => props.theme.sizes.borderRadius};
  border-end-start-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.darker};
`;