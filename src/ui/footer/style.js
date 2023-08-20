import styled from "styled-components";

export const Foot = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.font};
`;