import { createGlobalStyle } from 'styled-components';
import { colorBackground, colorText } from './theme-utils';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto", Arial, Helvetica, sans-serif;

    background-color: ${colorBackground()};
    color: ${colorText()};
  }

  html,
  body {
    overflow: auto;
  }
`;
