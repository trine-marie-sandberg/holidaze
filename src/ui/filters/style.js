import { styled } from "styled-components";

export const FilterManager = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const TotalGuestsInput = styled.input`
  width: 40px;
`;
export const FilterLabels = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${(props) => props.theme.sizes.xs};
`;
export const FlexFilters = styled.div`
  display: flex;
`;
export const PaddingOnFilters = styled.div`
  padding: 0 ${(props) => props.theme.sizes.sm};
`;
export const SearchField = styled.input`
  width: 40vw;
  max-width: 500px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const HideLabel = styled.label`
  display: none;
`;
export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchFilterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const I = styled.i`
  font-size: ${(props) => props.theme.sizes.med};
  padding: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.font};
  @media (max-width: 800px) {
   padding: ${(props) => props.theme.sizes.xs};
  }
`;
export const RatingCounter = styled.div`
  font-size: ${(props) => props.theme.sizes.sm};
  width: ${(props) => props.theme.sizes.sm};
  text-align: center;
`;
export const SubmitBtn = styled.button`
  align-self: center;
  margin: ${(props) => props.theme.sizes.sm};
  padding: ${(props) => props.theme.sizes.xs} ${(props) => props.theme.sizes.lg};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.color.font};
  height: fit-content;
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.black};
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props) => props.theme.color.black};
  }
`;