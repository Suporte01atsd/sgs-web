import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    width: 100%;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  #root {
    min-height: 100vh;
    width: 100%
  }
`;