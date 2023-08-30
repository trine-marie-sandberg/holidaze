import { styled } from "styled-components";

export const I = styled.i`
  font-size: ${(props) => props.theme.sizes.med};
  padding: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.font};
  @media (max-width: 800px) {
   padding: ${(props) => props.theme.sizes.xs};
  }
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
export const SearchWrap = styled.form`
  display: flex;
  align-items: center;
`;
//filters
export const FilterManager = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const SearchFilterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const PaddingOnFilters = styled.div`
  padding: 0 ${(props) => props.theme.sizes.sm};
`;
//Individual filters
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