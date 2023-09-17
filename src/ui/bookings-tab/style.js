import styled from "styled-components";

export const DelIcon = styled.i`
  cursor: pointer;
  color: ${(props) => props.theme.color.font};
`;
export const DelUpdBtn = styled.button`
  background-color: ${(props) => props.theme.color.black};
  border: none;
  font-size: 22px;
  margin-right: 15px;
`;
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-evenly;
  padding: 5px;
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.color.black};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const Bold = styled.span`
  font-weight: 500;
`;