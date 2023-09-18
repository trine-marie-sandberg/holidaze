import { styled } from "styled-components";

export const VenueWrap = styled.div`
  padding: ${(props) => props.theme.sizes.sm};
  /* max-width: 1200px; */
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
      height: 40vw;
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
  max-width: 70vw;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.darker};
  animation: fadeIn 5s;
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @media(max-width: 300px) {
    max-width: 50vw;
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
  @media(max-width: 300px) {
    margin: 5px;
  }
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
  @media(max-width: 300px) {
    margin: 5px;
  }
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
  @media(max-width: 600px) {
      font-size: 14px;
    }
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
  @media(max-width: 600px) {
    padding: ${(props) => props.theme.sizes.xs} ${(props) => props.theme.sizes.med};
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
export const DetailsWrap = styled.div`
  max-width: 700px;
`;
export const CalendarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const ReserveBtn = styled.button`
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.secondary};
  border: 1px solid ${(props) => props.theme.color.black};
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 25px;
  margin: 0;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  cursor: pointer;
`;
export const BookCloseWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;