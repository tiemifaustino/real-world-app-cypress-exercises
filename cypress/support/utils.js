export const parseCurrency = (text) => parseFloat(text.replace(/[^\d.-]/g, ''));
