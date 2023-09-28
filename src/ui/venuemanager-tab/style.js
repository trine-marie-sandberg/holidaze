import styled from "styled-components";

export const DelUpdBtn = styled.button`
  background-color: ${(props) => props.theme.color.darker};
  padding: 0;
  margin: 5px;
  border: none;
  font-size: 22px;
  & i {
    color: ${(props) => props.theme.color.font};
    cursor: pointer;
  }
`;
export const DelUpdBtnWrap = styled.div`
  background-color: ${(props) => props.theme.color.darker};
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
`;
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.color.darker};
  width: 100%;
`;
export const PaddingRight = styled.div`
  padding: 0 10px;
`;
export const Bold = styled.span`
  font-weight: 500;
  padding: 0 5px;
`;
export const BtnImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-evenly;
  height: 200px;
  background-size: cover;
  margin-left: 4px;
`;
export const ToVenueBtn = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.color.darker};
  & a:hover {
    text-decoration: underline;
  }
`;
export const DetailsWrap = styled.div`
  background-color: ${(props) => props.theme.color.dark};
  padding: 15px;
  margin: 10px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const LocationWrap = styled.div`
  padding: 10px;
`;
export const MetasWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
//Form visibility functions
export const FormContainer = styled.div`
  background-color: rgba(2, 21, 32);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
`;
export const CloseBtn = styled.button`
  background-color: ${(props) => props.theme.color.darker};
  border-bottom-right-radius: ${(props) => props.theme.sizes.borderRadius};
  border-top-left-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: 0 10px;
  position: fixed;
  color: white;
  border: none;
  font-size: 60px;
  cursor: pointer;
`;
export const CloseBtnWrap = styled.div`
  margin: 0;
`;