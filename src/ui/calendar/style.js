import styled from "styled-components";

export const CalendarWrap = styled.div`
  background-color: white;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: 10px;
  width: fit-content;
  overflow-x: scroll;
  @media(max-width: 500px) {
    padding: 0;
    max-width: 95vw;
    & div {
      margin: 0 auto;
      border-radius: ${(props) => props.theme.sizes.borderRadius};
      padding: 1px;
      border: none;
    }
    & .rdrDateDisplayWrapper {
      margin: 0;
      padding: 1px;
    }
  }
`;
export const SubmitBtn = styled.button`
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.secondary};
  border: 1px solid ${(props) => props.theme.color.black};
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 25px;
  margin: 0 10px 0 0;
  cursor: pointer;
  @media(max-width: 500px) {
    padding: 10px 20px;
    font-size: 13px;
  }
`;
export const SubmitInputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.sizes.sm};
`;
export const CalendarInput = styled.input`
  font-weight: 600;
  margin-bottom: 20px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: none;
  width: 90%;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.font};
`;
export const GuestsInput = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.black};
  max-width: 45px;
  @media(max-width: 500px) {
    max-width: 30px;
    padding: 8px 15px;
  }
`;