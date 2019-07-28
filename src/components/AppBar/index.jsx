import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useScrollTrigger } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme.json';

const themeOverides = scrolled => {
  return createMuiTheme({
    ...theme,
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: scrolled ? 'rgba(0,0,0,.65)' : 'transparent',
          backgroundImage:
            'linear-gradient(0deg, transparent 5%, rgba(0, 0, 0, 0.65))',
          transition: 'background .3s ease',
        },
      },
    },
  });
};

const AppBar = () => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
  });
  return (
    <ThemeProvider theme={themeOverides(scrolled)}>
      <MuiAppBar elevation={0}>
        <Toolbar>
          <Typography variant="h6">Scroll to Elevate App Bar</Typography>
        </Toolbar>
      </MuiAppBar>
    </ThemeProvider>
  );
};

export default AppBar;
