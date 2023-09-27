import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(2, 21, 32);
`;
export const InputLabelWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SubmitBtn = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.black};
  padding: 0.5rem 1rem;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;