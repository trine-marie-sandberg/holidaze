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
    border-bottom: 2px solid ${(props) => props.theme.color.light};;
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
  cursor: pointer;
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
//https://codepen.io/shephero/pen/LYVrdjX
//https://css-tricks.com/transforms-on-svg-elements/
export const MenuIconWrap = styled.i`
  z-index: 2;
  cursor: pointer;
  display: none;
  & .clicked {
    transition: all 5s ease;
    & #line-middle {
      transition: all 1s ease;
      fill: ${(props) => props.theme.color.secondary};
    }
    & #line-top {
      transition: all 1s ease;
      fill: ${(props) => props.theme.color.secondary};
      rotate: 1deg;
    }
    & #line-bottom {
      transition: all 1s ease;
      fill: ${(props) => props.theme.color.secondary};
      rotate: 1deg;
    }
  } 
  @media (max-width: 600px) {
   display: block;
  }
`;
export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${(props) => props.theme.color.font};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.959);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FormWrap = styled.div`
  background-color: ${(props) => props.theme.color.darker};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const Close = styled.i`
  cursor: pointer;
`;
export const RegisterCancelWrap = styled.div`
  font-size: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.sizes.sm};
  & p {
    font-size: 25px;
    margin: 0;
    cursor: pointer;
  }
`;
export const RegisterBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RegisterBtn = styled.button`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.font};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 35px;
  margin: 5px 0;
  cursor: pointer;
`;