import styled from "styled-components";

export const CalendarWrap = styled.div`
  background-color: white;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: 10px;
  width: fit-content;
`;
export const SubmitBtn = styled.button`
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.secondary};
  border: 1px solid ${(props) => props.theme.color.black};
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 25px;
  margin: 0;
  cursor: pointer;
`;
export const SubmitInputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.sizes.sm};
`;
export const CalendarInput = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.black};
`;
export const GuestsInput = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.black};
  max-width: 60px;
`;