import styled from "styled-components";

export const BookingWrap = styled.div`
  background-color: ${(props) => props.theme.color.dark};
  & :hover {
    background-color: rgb(33, 70, 91);
  }
`;
export const DelIcon = styled.i`
  cursor: pointer;
  color: ${(props) => props.theme.color.font};
  background-color: rgba(0, 0, 0, 0) !important;
`;
export const DelUpdBtn = styled.button`
  background-color: ${(props) => props.theme.color.darker} !important;
  margin: 0;
  border: none;
  font-size: 22px;
`;
export const DelUpdBtnWrap = styled.div`
  background-color: ${(props) => props.theme.color.darker} !important;
  display: flex;
  justify-content: space-between;
  min-width: 150px;
  padding: 5px 0;
`;
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.color.dark};
  width: 100%;
`;
export const BookingDetailsWrap = styled.div`
  padding: 0 10px;
`;
export const BookingsHeading = styled.h2`
  margin: 30px;
`;
export const Bold = styled.span`
  font-weight: 500;
`;
export const BtnImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-evenly;
  height: 150px;
  background-size: cover;
  @media(max-width: 643px) {
    align-items: end;
  }
`;