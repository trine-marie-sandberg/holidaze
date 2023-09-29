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
  background-image: linear-gradient(${(props) => props.theme.color.primary}, rgb(50, 105, 123) 95%);
  color: ${(props) => props.theme.color.font};
  border-bottom-left-radius: ${(props) => props.theme.sizes.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const FormElementsWrap = styled.div`
  color: ${(props) => props.theme.color.font};
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-weight: 400;
  padding: 10px 0;
`;
export const Input = styled.input`
  padding: ${(props) => props.theme.sizes.sm};
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.font};
  border: none;
  width: 100%;
  &:focus {
    background-color: ${(props) => props.theme.color.darker};
    border-radius: 5px;
    outline: 1px solid ${(props) => props.theme.color.secondary};
  }
`;
export const IconInputWrap = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.color.dark};
  display: flex;
  align-items: center;
  padding: 10px;
`;
export const InputIcon = styled.i`
  background-color: ${(props) => props.theme.color.primary};
  color: rgb(87, 128, 152);
  color: ${(props) => props.theme.color.secondary};
  font-size: 25px;
  padding-right: 10px;
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
  font-size: 25px;
  font-weight: 200;
`;