import styled from "styled-components";

export const Foot = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.font};
  background-color: ${(props) => props.theme.color.primary};
`;
export const SocialIcons = styled.i`
  padding: ${(props) => props.theme.sizes.xs};
  font-size: ${(props) => props.theme.sizes.med};
`;