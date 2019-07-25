import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const ThemeProvider = ({ theme, children }) => (
  <SCThemeProvider theme={theme}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      {children}
    </MuiThemeProvider>
  </SCThemeProvider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
