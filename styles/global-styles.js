import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0 1rem;
  }

  a {
    text-decoration: none !important;
    color: inherit;
  }
  
`;
