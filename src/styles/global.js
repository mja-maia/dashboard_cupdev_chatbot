import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    color: #656565;
  }

  body{
    font-size: 16px;
    font-weight: 300;
    text-rendering: optimizeLegibility !important;
    -webkit-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;

    button{
      cursor: pointer;
      outline:none;
    }
  }
`;

export default GlobalStyles;
