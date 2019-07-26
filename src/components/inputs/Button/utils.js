// eslint-disable-next-line import/prefer-default-export
export const determineVariant = outlined => {
  if (outlined) {
    return 'outlined';
  }
  return 'contained';
};
