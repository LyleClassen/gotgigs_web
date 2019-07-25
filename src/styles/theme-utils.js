export const colorBackground = (variant = 'default') => props => {
  return props.theme.palette.background[variant];
};

export const colorText = (variant = 'primary') => props =>
  props.theme.palette.text[variant];
