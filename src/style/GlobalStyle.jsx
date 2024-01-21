import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;

     
  }

  body {
    margin: 0;
    background-color: white;
    color: #ff6060;
    
  }

  html, body {
    height: 100%;
    width: 100%;
    
    @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 760px) {
    width: 100%;
    height: 100%;
  }
  }

  h1, p {
    margin: 0;
  }
`;

export default GlobalStyles;
