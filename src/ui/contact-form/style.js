import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
  max-width: 400px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.77);
  padding: ${(props) => props.theme.sizes.lg};
  background-image: linear-gradient(${(props) => props.theme.color.primary} 40%, rgb(64, 115, 123));
  color: ${(props) => props.theme.color.font};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const FormElementsWrap = styled.div`
  color: ${(props) => props.theme.color.font};
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-weight: bold;
`;
export const Input = styled.input`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.font};
  width: 100%;
  border: none;
`;
export const IconInputWrap = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  border: 1px solid rgb(87, 128, 152);
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: 5px;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const InputIcon = styled.i`
  background-color: ${(props) => props.theme.color.primary};
  color: rgb(87, 128, 152);
  padding: 10px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.font};
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.black};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const Heading = styled.h1`
  font-size: 20px;
`;