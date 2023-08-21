import { styled } from "styled-components";

export const BtnPrimary = styled.p`
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.secondary};
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 45px;
  margin: 0;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 10px;
    font-weight: 500;
  }
`;
export const LinkWrap = styled.div`
  padding: ${(props) => props.theme.sizes.lg} 0;
  & a {
    text-decoration: none;
  }
  & :hover p {
    border: 1px solid ${(props) => props.theme.color.light};
  }
`;