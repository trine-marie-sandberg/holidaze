import styled from "styled-components";

export const Nav =  styled.nav`
  color: ${(props) => props.theme.color.font};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 600px) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    background-color: ${(props) => props.theme.color.primary};
  }
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
  @media (max-width: 600px) {
   display: none;
  }
`;
export const Li = styled.li`
  padding: 5px;
  & :hover p {
    display: block;
  }
  & a {
    color: white;
    text-decoration: none;
  }
`;
export const I = styled.i`
  font-size: ${(props) => props.theme.sizes.med};
  padding: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.font};
  @media (max-width: 800px) {
   padding: ${(props) => props.theme.sizes.xs};
  }
`;
export const HoverText = styled.p`
  display: none;
  position: absolute;
  top: 55px;
  @media (max-width: 600px) {
    position: sticky;
    display: inline !important;
  }
`;
export const MobileMenu = styled.img`
  display: none;
  pointer-events: none;
  & svg > g {
    background-color: black !important;
  } 
  @media (max-width: 600px) {
   display: block;
  }
`;
export const MenuIconWrap = styled.i`
  z-index: 2;
  cursor: pointer;
  display: none;
  & .clicked {
    background-color: black !important;
    & #line-top {
      background-color: aliceblue;
      stroke: blue;
    }
  } 
  @media (max-width: 600px) {
   display: block;
  }
`;