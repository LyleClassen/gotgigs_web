import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'components/ThemeProvider';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme.json';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
