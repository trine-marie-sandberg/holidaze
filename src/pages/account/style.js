import styled from "styled-components";

export const AccountContainer = styled.div`
  padding: ${(props) => props.theme.sizes.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`;
export const AccountInfoWrap = styled.div`
  max-width: 400px;
  padding: 10px;
`;
export const BookingVenueWrap = styled.div`
  position: relative;
  height: 600px;
  border: 3px solid ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  overflow-y: scroll;
  scrollbar-color: ${(props) => props.theme.color.secondary} ${(props) => props.theme.color.black};
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.secondary};
  }
`;
export const BookingVenueContainer = styled.div`
  min-width: 60%;
  @media(max-width: 1500px) {
    min-width: 50%;
  }
  @media(max-width: 1200px) {
    min-width: 100%;
  }
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.color.font};
    & :hover {
      text-decoration: underline;
    }
  }
`;
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & #active-btn {
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.black};
  }
`;
export const UpdateBtn = styled.button`
  cursor: pointer;
  height: fit-content;
  margin: 0 ${(props) => props.theme.sizes.med};
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.color.darker};
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.font};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  font-size: 20px;
  font-weight: 200;
`;
export const UpdateIcon = styled.i`
  padding: 0 ${(props) => props.theme.sizes.xs};
  border-bottom: 1px dashed ${(props) => props.theme.color.font};
`;
export const BookVenueBtn = styled.button`
  border-top-left-radius: ${(props) => props.theme.sizes.borderRadius};
  border-top-right-radius: ${(props) => props.theme.sizes.borderRadius};
  margin-left: 12px;
  padding: 4px 10px;
  border: none;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.font};
  cursor: pointer;
`;
export const Avatarimg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin: 15px;
`;
export const ContactLink = styled.div`
& a {
  color: white;
  text-decoration: none;
  font-weight: 400;
  & :hover {
    text-decoration: underline;
  }
}
`;
export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${(props) => props.theme.color.font};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.959);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;