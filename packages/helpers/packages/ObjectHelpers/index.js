export const removeByKey = (haystack, needle) => Object.keys(haystack)
  .filter((key) => parseInt(key, 0) !== parseInt(needle, 0))
  .reduce((result, current) => {
    // eslint-disable-next-line no-param-reassign
    result[current] = haystack[current];
    return result;
  }, {});

export const flattenObject = (ob) => {
  const toReturn = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const i in ob) {
    // eslint-disable-next-line no-prototype-builtins,no-continue
    if (!ob.hasOwnProperty(i)) continue;

    if (typeof ob[i] === 'object' && ob[i] !== null) {
      const flatObject = flattenObject(ob[i]);
      // eslint-disable-next-line no-restricted-syntax
      for (const x in flatObject) {
        // eslint-disable-next-line no-prototype-builtins,no-continue
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[`${i}.${x}`] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

export const makeCookieString = (cookies) => {
  let cookieString = '';
  Object.keys(cookies).forEach((cookie) => {
    cookieString += `${cookie}=${cookies[cookie]}; `;
  });

  cookieString = cookieString.substr(0, cookieString.length - 2);
  return cookieString;
};

/**
 * Safe read object property
 * @param obj
 * @param key
 * @param defaultValue
 * @returns {*}
 */
export const safeObjectPropertyRead = (obj, key, defaultValue = undefined) => key.split('.').reduce((nestedObject, index) => {
  if (nestedObject && index in nestedObject) {
    return nestedObject[index];
  }
  return undefined;
}, obj) || defaultValue;

/**
 * Get an object next property
 * @param obj
 * @param key
 * @returns {boolean|string|*}
 */
export const getNextProp = (obj, key) => {
  const keys = Object.keys(obj);
  const i = keys.indexOf(key);
  return i !== -1 && keys[i + 1] && obj[keys[i + 1]];
};
