export const onlyNumbers = (value: string) => {
  if (!value) return value;
  return value.replace(/[^\d]/g, '');
};
