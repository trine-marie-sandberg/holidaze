import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color-primary: rgb(5, 42, 64);
    --color-secondary: rgb(126, 227, 242);
    --color-tertiary: rgb(8, 73, 112);
    --color-font: white;
    --color-font-black: rgb(6, 44, 67);
    --color-warning: #301313;
    --color-contrast-light: rgb(87, 128, 152);
    --color-contrast-dark: rgb(5, 39, 59);
    --color-contrast-darker: rgb(3, 26, 40);
    --color-black: rgb(2, 17, 26);
    /* --color-border: rgb(49, 56, 59); */
    --color-border: rgb(4, 43, 61);

    --sizes-xs: 5px;
    --sizes-sm: 1rem;
    --sizes-med: 1.5rem;
    --sizes-lg: 2rem;
    --sizes-xl: 3rem;
    --sizes-xxl: 4rem;

    --sizes-card: 250px;
    --sizes-border-radius: 10px;
  }
  body {
    all: unset;
    display: block;
    font-family: "finalsix", sans-serif;
    font-weight: 300;
    font-style: normal;
    overflow-y: scroll;
    overflow-y: hidden;
    scrollbar-color: var(--color-secondary) var(--color-black);
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: var(--color-black);
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.secondary};
    }
  }
  h1 {
    font-family: "stevie-sans", sans-serif;
    font-weight: 500;
    font-style: normal;
  }
  button {
    font-family: "finalsix", sans-serif;
    font-weight: 400;
  }
  .active i {
    color: var(--color-secondary) !important;
  }
  #visible {
    display: block;
  }
`;

export default GlobalStyle;