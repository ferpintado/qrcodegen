import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    text-align: center;
    padding: 0;
    background: #184e77;
    font-family: "Roboto", Sans-Serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
