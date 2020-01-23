/* eslint-disable require-unicode-regexp */

/**
 * Converts all latin numbers to persian
 * @param string
 * @returns {string}
 */
export const persianNumber = string => {
  const numbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  // eslint-disable-next-line require-unicode-regexp
  return `${string}`.replace(/[0-9]/g, word => numbers[+word]);
};

/**
 * Converts all english numbers to persian
 * @param string
 * @returns {string}
 */
export const englishNumber = string => `${string}`
  .replace(/[\u0660-\u0669]/g, c => c.charCodeAt(0) - 0x0660)
  .replace(/[\u06f0-\u06f9]/g, c => c.charCodeAt(0) - 0x06f0);

/**
 * Generate random number key
 * @returns {string}
 */
export const generateKey = () => {
  const timeStamp = Math.round(new Date().getTime() / 1000);
  const rand = Math.floor(Math.random() * 10000 + 1);
  return `${timeStamp}${rand}`;
};

/**
 * Gives us cellphone pattern
 * @returns {string}
 */
export const cellphoneValidate = () => '(?:(\u0660\u0669[\u0660-\u0669][\u0660-\u0669]{8})|(\u06F0\u06F9[\u06F0-\u06F9][\u06F0-\u06F9]{8})|(09[0-9][0-9]{8}|\\+98[0-9][0-9]{9}))$';

/**
 * Gives us cellphone pattern
 * @returns {{pattern: RegExp}}
 */
export const cellphoneValidatePattern = () => ({
  pattern: /(?:(\u0660\u0669[\u0660-\u0669][\u0660-\u0669]{8})|(\u06F0\u06F9[\u06F0-\u06F9][\u06F0-\u06F9]{8})|(09[0-9][0-9]{8}|\\+98[0-9][0-9]{9}))$/
});

/**
 * Convert price
 * @param amount
 * @returns {string}
 */
export const currencyPrice = amount => `${persianNumber(
  // eslint-disable-next-line require-unicode-regexp
  `${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
)}  `;

/* eslint-enable require-unicode-regexp */
