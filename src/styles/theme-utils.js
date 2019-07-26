export const colorBackground = (variant = 'default') => props => {
  return props.theme.palette.background[variant];
};

export const colorText = (variant = 'primary') => props =>
  props.theme.palette.text[variant];

export const colorPrimary = (variant = 'main') => theme =>
  theme.palette.primary[variant];

export const colorSecondary = (variant = 'main') => theme =>
  theme.palette.secondary[variant];
