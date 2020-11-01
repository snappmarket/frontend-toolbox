/**
 * @function
 * @name persianNumber
 * @description converts the english number to persian number
 * @param   string    {string}    the string that contains the number  you want to convert to persian
 * @return  {string}
 */
export const persianNumber = string => {
  const numbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return `${string}`.replace(/[0-9]/g, word => numbers[+word]);
};

/**
 * @function
 * @name englishNumber
 * @description converts both arabic-extended and arabic-indic numbers to english
 * @param   string    {string}    the string that contains the number  you want to convert to english
 * @return  {string}
 */
export const englishNumber = string =>
  `${string}`
    .replace(/[\u0660-\u0669]/g, c => c.charCodeAt(0) - 0x0660)
    .replace(/[\u06f0-\u06f9]/g, c => c.charCodeAt(0) - 0x06f0);

/**
 * @function
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
 * @function
 * @name cellphoneValidate
 * @description returns a regular expression for validating cellphone number with format of cellphone numbers of Iran
 * @return {string}
 */
export const cellphoneValidate = () =>
  '(?:(\u0660\u0669[\u0660-\u0669][\u0660-\u0669]{8})|(\u06F0\u06F9[\u06F0-\u06F9][\u06F0-\u06F9]{8})|(09[0-9][0-9]{8}|\\+98[0-9][0-9]{9}))$';

/**
 * @function
 * @name currencyPrice
 * @description turns number into currency formatted number in persian
 * @param   amount    {number}    the english number you want to convert to currency formatted number in persian
 * @return  {string}
 */
export const currencyPrice = (amount, hasUnit = true) =>
  `${persianNumber(`${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','))} ${
    hasUnit ? 'تومان' : ''
  }`;

/**
 * @function
 * @name decimalsPriceLimiter
 * @description Convert a number into a string, rounding the number to keep only limit (default is 2) decimals
 * @param   limit    {number}
 * @return  {string}
 */
export const decimalsPriceLimiter = (price, limit = 2) =>
  price % 1 !== 0 ? parseFloat(price.toFixed(limit), 10) : price;

export const numericInputValidation = ({
  inputValue,
  min,
  max,
  validationMessages,
}) => {
  let result = {};
  const newInputValue = inputValue.replace(/[^0-9]/g, '');

  const isValid = () => {
    if (max) {
      return (
        newInputValue !== '' && newInputValue >= min && newInputValue <= max
      );
    }
    return newInputValue !== '' && newInputValue >= min;
  };

  const checkedIsValid = isValid();
  const regexp = new RegExp(`^[0-9]*[1-9][0-9]*$`);

  try {
    if (!checkedIsValid && newInputValue === '')
      throw validationMessages.nanMessage;
    if (!checkedIsValid && newInputValue < min)
      throw validationMessages.minMessage;
    if (!checkedIsValid && newInputValue > min)
      throw validationMessages.maxMessage;
    if (regexp.test(newInputValue) || newInputValue === '') {
      result = {
        value: newInputValue,
        message: {},
        isValid: checkedIsValid,
      };
    }
  } catch (err) {
    result = {
      value: newInputValue,
      message: err,
      isValid: checkedIsValid,
    };
  }
  return result;
};

/**
 * @function
 * @name zeroPadding
 * @description adds starting zeros to numbers
 * @param number    {number}  number you want to add zero to its start
 * @param padding   {number}  count of zeros you want to add for a number to fix its length
 * @returns {string}
 */
export const zeroPadding = (number, padding = 2) => {
  const numberLength = `${number}`.length;
  const zeroCount = numberLength < padding ? padding - numberLength : 0;

  return `${[...Array(zeroCount)].map(() => '0').join('')}${number}`;
};
