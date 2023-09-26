import styled from "styled-components";

export const HeaderBtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
`;
export const NewListingBtn = styled.button`
  color: ${(props) => props.theme.color.font};
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 60px;
  cursor: pointer;
`;