import styled from "styled-components";

export const Head = styled.header`
  padding: 0 ${(props) => props.theme.sizes.xxl};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.primary};
  @media (max-width: 600px) {
   padding: 0 ${(props) => props.theme.sizes.lg};
  }
`;
export const Logo = styled.img`
  max-width: 150px;
  height: auto;
  padding: ${(props) => props.theme.sizes.xs};
  @media (max-width: 600px) {
   max-width: 120px;
  }
`;