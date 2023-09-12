import styled from "styled-components";

export const AccountContainer = styled.div`
  padding: ${(props) => props.theme.sizes.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const BookingVenueWrap = styled.div`
  min-height: 500px;
  border: 1px solid ${(props) => props.theme.color.border};
  background-color: ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: ${(props) => props.theme.sizes.sm};
`;
export const BookingVenueContainer = styled.div`
  min-width: 50%;
`;
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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