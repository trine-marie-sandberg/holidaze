import styled from "styled-components";

export const AccountContainer = styled.div`
  background-color: ${(props) => props.theme.color.darker};
  padding: ${(props) => props.theme.sizes.sm};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.border};
`;