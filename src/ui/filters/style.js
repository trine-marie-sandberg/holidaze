import { styled } from "styled-components";

//filters
export const FilterManager = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
export const PaddingOnFilters = styled.div`
  padding: 0 ${(props) => props.theme.sizes.sm};
`;