import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import { colorText, colorBackground } from 'styles/theme-utils';
import { determineVariant } from './utils';

const useStyles = makeStyles(theme => ({
  outlined: {
    border: `1px solid ${colorText()({ theme })}`,
    '&:hover': {
      backgroundColor: colorText()({ theme }),
      color: colorBackground()({ theme }),
    },
  },
}));

const Button = ({ children, outlined, ...props }) => {
  const classes = useStyles();
  return (
    <MuiButton
      classes={classes}
      variant={determineVariant(outlined)}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

Button.defaultProps = {
  outlined: undefined,
};

Button.propTypes = {
  outlined: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
