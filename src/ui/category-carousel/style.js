import { styled } from "styled-components";

export const CategoryWrap = styled.div`
  padding: ${(props) => props.theme.sizes.xs};
  max-width: 800px;
  padding: ${(props) => props.theme.sizes.sm};
`;
export const Heading = styled.h2`
  margin: 0;
`;
export const DotsHeadingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.sizes.xs};
`;
export const DotsWrap = styled.div`
  display: flex;
`;
export const Dot = styled.div`
  align-self: flex-end;
  padding: 8px;
  margin: 8px;
  background-color: ${(props) => props.theme.color.font};
  border-radius: 100%;
  @media (max-width: 600px) {
   padding: 6px;
   margin: 6px;
  }
  & .current {
    background-color: ${(props) => props.theme.color.secondary};
  }
`;
export const TextImgWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: ${(props) => props.theme.sizes.sm};
`;
export const Image = styled.img`
  height: auto;
  width: 100%;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const ImgArrowWrap = styled.div`
margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const Arrow = styled.i`
  font-size: ${(props) => props.theme.sizes.lg};
  padding: ${(props) => props.theme.sizes.med};
  @media (max-width: 600px) {
   font-size: ${(props) => props.theme.sizes.med};
   padding: ${(props) => props.theme.sizes.sm};
  }
`;