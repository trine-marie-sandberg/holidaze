import styled from "styled-components";

export const AccountContainer = styled.div`
  padding: ${(props) => props.theme.sizes.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const AccountInfoWrap = styled.div`
  max-width: 600px;
  padding: 10px;
`;
export const BookingVenueWrap = styled.div`
  min-height: 500px;
  border: 1px solid ${(props) => props.theme.color.border};
  background-color: ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  max-height: 500px;
  overflow-y: scroll;
`;
export const BookingVenueContainer = styled.div`
  min-width: 50%;
  @media(max-width: 1200px) {
    min-width: 100%;
  }
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.color.font};
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
  padding: 8px;
  border: 1px solid ${(props) => props.theme.color.border};
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.font};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
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