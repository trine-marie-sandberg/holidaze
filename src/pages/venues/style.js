import { styled } from "styled-components";

export const ShowMoreBtn = styled.button`
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.secondary};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 45px;
  width: fit-content;
  align-self: center;
  &:hover {
    border: 1px solid ${(props) => props.theme.color.dark};
  }
  cursor: pointer;
`;
export const BtnCardsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;