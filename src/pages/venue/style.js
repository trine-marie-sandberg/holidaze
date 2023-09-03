import { styled } from "styled-components";

export const VenueWrap = styled.div`
  padding: ${(props) => props.theme.sizes.sm};
  max-width: 1200px;
`;
export const ImagesWrap = styled.div`
  background-color: ${(props) => props.theme.color.darker};
  border-top-right-radius: ${(props) => props.theme.sizes.borderRadius};
  border-top-left-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.darker};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  & {
    font-size: 50px;
    @media(max-width: 1400px) {
      font-size: 40px;
    }
    @media(max-width: 1000px) {
      font-size: 35px;
      height: 50vw;
    }
    @media(max-width: 600px) {
      height: 60vw;
      font-size: 30px;
    }
    @media(max-width: 500px) {
      font-size: 25px;
    }
  }
  & #arrow-faded {
    display: none;
  }
`;
export const Image = styled.img`
  height: 100%;
  width: auto;
  max-width: 50vw;
  max-height: 600px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.darker};
`;
export const ArrowLeft = styled.div`
  cursor: pointer;
  margin-right: ${(props) => props.theme.sizes.sm};
  left: 25;
  top: 50;
`;
export const ArrowRight = styled.div`
  cursor: pointer;
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
export const BackHeadingWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const Heading = styled.h1`
  padding-left: ${(props) => props.theme.sizes.lg};
`;
export const BackBtn = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.color.font};
  background-color: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.dark};
  padding: ${(props) => props.theme.sizes.sm} ${(props) => props.theme.sizes.lg};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  width: fit-content;
  height: fit-content;
  &:hover {
    border: 1px solid ${(props) => props.theme.color.darker};
  }
`;
export const BackArrow = styled.i`
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