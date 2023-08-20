import { styled } from "styled-components";

  const Pagewrap = styled.div`
  margin: ${(props) => props.theme.sizes.xs} auto;
  padding: 16px 10vw;
  @media (max-width: 500px) {
   padding : 16px 0;
  }
`;

export default Pagewrap