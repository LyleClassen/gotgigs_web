import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';
import Routes from './routes';

import 'styles/global.scss';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
