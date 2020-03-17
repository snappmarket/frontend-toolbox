/**
 * @name persianNumber
 * @description converts the english number to persian number
 * @param string
 * @return {string}
 */
export const persianNumber = (string) => {
  const numbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return `${string}`.replace(/[0-9]/g, (word) => numbers[+word]);
};

/**
 * @name englishNumber
 * @description converts both arabic-extended and arabic-indic numbers to english
 * @param string
 * @return {string}
 */
export const englishNumber = (string) => `${string}`
  .replace(/[\u0660-\u0669]/g, (c) => c.charCodeAt(0) - 0x0660)
  .replace(/[\u06f0-\u06f9]/g, (c) => c.charCodeAt(0) - 0x06f0);

/**
 * @name generateKey
 * @description returns a key which is combination of a random number and timestamp
 * @return {string}
 */
export const generateKey = () => {
  const timeStamp = Math.round(new Date().getTime() / 1000);
  const rand = Math.floor(Math.random() * 10000 + 1);
  return `${timeStamp}${rand}`;
};

/**
 * @name cellphoneValidate
 * @description returns a regular expression for validating cellphone number with format of cellphone numbers of Iran
 * @return {string}
 */
export const cellphoneValidate = () => '(?:(\u0660\u0669[\u0660-\u0669][\u0660-\u0669]{8})|(\u06F0\u06F9[\u06F0-\u06F9][\u06F0-\u06F9]{8})|(09[0-9][0-9]{8}|\\+98[0-9][0-9]{9}))$';

/**
 * @name currencyPrice
 * @description turns number into currency formatted number in persian
 * @param amount
 * @return {string}
 */
export const currencyPrice = (amount) => `${persianNumber(`${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','))}`;
