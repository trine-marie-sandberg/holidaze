import styled from "styled-components";

export const DelIcon = styled.i`
  cursor: pointer;
  color: ${(props) => props.theme.color.font};
`;
export const DelUpdBtn = styled.button`
  background-color: ${(props) => props.theme.color.dark};
  padding: 0;
  border: none;
  font-size: 22px;
`;
export const DelUpdBtnWrap = styled.div`
  background-color: ${(props) => props.theme.color.dark};
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
`;