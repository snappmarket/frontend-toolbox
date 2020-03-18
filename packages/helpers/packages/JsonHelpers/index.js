/* eslint-disable no-param-reassign */
/**
 * @name recursiveJsonParse
 * @description parses a json string, recursively.
 * @param collection
 * @param value
 * @return {string|{}|*}
 */
export const recursiveJsonParse = (collection = {}, value) => {
  // eslint-disable-next-line no-useless-escape
  if (typeof value === 'string' && /^[\[|\{](\s|.*|\w)*[\]|\}]$/.test(value)) {
    try {
      const parsedValue = JSON.parse(value);
      Object.keys(parsedValue).forEach(key => {
        collection[key] = recursiveJsonParse(collection[key], parsedValue[key]);
      });
    } catch (e) {
      return value;
    }
    return collection;
  }
  return value;
};
/* eslint-enable no-param-reassign */
