import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MuiButton from '@material-ui/core/Button';
import theme from 'styles/theme.json';
import {
  colorText,
  colorBackground,
  colorPrimary,
  colorSecondary,
} from 'styles/theme-utils';
import { determineVariant } from './utils';

const themeOverrides = rounded => {
  const baseTheme = createMuiTheme();
  const mainTextColor = colorText()({ theme });
  const mainPrimaryColor = colorPrimary()(theme);
  const mainSecondaryColor = colorSecondary()(theme);

  return createMuiTheme({
    ...theme,
    overrides: {
      MuiButton: {
        root: {
          borderRadius: rounded ? '4rem' : baseTheme.shape.borderRadius,
        },
        outlined: {
          border: `1px solid ${mainTextColor}`,
          '&:hover': {
            backgroundColor: mainTextColor,
            color: colorBackground()({ theme }),
          },
        },
        containedPrimary: {
          background: mainPrimaryColor,
          backgroundImage: `linear-gradient(90deg,${mainPrimaryColor},${mainSecondaryColor})`,
        },
      },
    },
  });
};

const determineColor = (primary, secondary) => {
  if (primary) {
    return 'primary';
  }
  if (secondary) {
    return 'secondary';
  }
  return 'default';
};

const Button = ({
  children,
  outlined,
  rounded,
  primary,
  secondary,
  ...props
}) => (
  <ThemeProvider theme={themeOverrides(rounded)}>
    <MuiButton
      variant={determineVariant(outlined)}
      color={determineColor(primary, secondary)}
      {...props}
    >
      {children}
    </MuiButton>
  </ThemeProvider>
);

Button.defaultProps = {
  outlined: undefined,
  rounded: undefined,
  primary: undefined,
  secondary: undefined,
};

Button.propTypes = {
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
