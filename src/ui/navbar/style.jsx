import styled from "styled-components";

export const Nav =  styled.nav`
  color: ${(props) => props.theme.color.font};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const Head = styled.header`
  padding: ${(props) => props.theme.sizes.sm};
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.color.primary};
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 5px;
`;
export const Li = styled.li`
  padding: 5px;
  & :hover p {
    display: block;
  }
  & a {
    color: white;
  }
`;
export const I = styled.i`
  font-size: ${(props) => props.theme.sizes.med};
  padding: 5px;
  color: ${(props) => props.theme.color.font};
`;

export const HoverText = styled.p`
  display: none;
  position: absolute;
`;