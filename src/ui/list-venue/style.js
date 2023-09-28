import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(2, 21, 32);
  padding-top: 65px;
`;
export const InputLabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  & label {
    padding: 5px 0;
  }
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