import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;