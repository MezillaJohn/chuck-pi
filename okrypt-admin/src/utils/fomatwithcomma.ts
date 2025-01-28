export const formatWithCommas = (value: string) => {
  if (!value) return ''; // Return an empty string if the input is empty
  const number = value.replace(/,/g, ''); // Remove existing commas
  return parseFloat(number).toLocaleString('en-US') || '0'; // Format the number with commas
};
