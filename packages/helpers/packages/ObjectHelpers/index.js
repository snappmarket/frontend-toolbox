/**
 * @name removeByKey
 * @description returns an object without given key
 * @param haystack
 * @param needle
 * @return {{}}
 */
export const removeByKey = (haystack, needle) => Object.keys(haystack)
  .filter((key) => parseInt(key, 0) !== parseInt(needle, 0))
  .reduce((result, current) => {
    // eslint-disable-next-line no-param-reassign
    result[current] = haystack[current];
    return result;
  }, {});

/**
 * @name flattenObject
 * @description recursively flattens an object, properties keys would be combination of parent and sub-object keys
 * @param object
 * @return {{}}
 */
export const flattenObject = (object) => {
  const result = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    // eslint-disable-next-line no-prototype-builtins,no-continue
    if (!object.hasOwnProperty(key)) continue;

    if (typeof object[key] === 'object' && object[key] !== null) {
      const flatObject = flattenObject(object[key]);
      // eslint-disable-next-line no-restricted-syntax
      for (const itemKey in flatObject) {
        // eslint-disable-next-line no-prototype-builtins,no-continue
        if (!flatObject.hasOwnProperty(itemKey)) continue;

        result[`${key}.${itemKey}`] = flatObject[itemKey];
      }
    } else {
      result[key] = object[key];
    }
  }
  return result;
};

/**
 * @name makeCookieString
 * @description converts the key-value cookie into concatenated cookie string
 * @param cookies
 * @return {string}
 */
export const makeCookieString = (cookies) => {
  let cookieString = '';
  Object.keys(cookies).forEach((cookie) => {
    cookieString += `${cookie}=${cookies[cookie]}; `;
  });

  cookieString = cookieString.substr(0, cookieString.length - 2);
  return cookieString;
};

/**
 * @name safeObjectPropertyRead
 * @description reads properties of an object safely and avoids to throw an error if property or object are undefined
 * @param object
 * @param key
 * @param defaultValue
 * @returns {*}
 */
export const safeObjectPropertyRead = (object, key, defaultValue = undefined) => key.split('.').reduce((nestedObject, index) => {
  if (nestedObject && index in nestedObject) {
    return nestedObject[index];
  }
  return undefined;
}, object) || defaultValue;

/**
 * @name getNextProp
 * @description returns the next property of given property in an object
 * @param object
 * @param key
 * @returns {boolean|string|*}
 */
export const getNextProp = (object, key) => {
  const keys = Object.keys(object);
  const index = keys.indexOf(key);
  return index !== -1 && keys[index + 1] && object[keys[index + 1]];
};
