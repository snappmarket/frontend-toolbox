/**
 * @function
 * @name recursiveJsonParse
 * @description parses a json string, recursively.
 * @param   collection    {object}    the object you want to put the parsed json into
 * @param   value         {string}    stringified json object
 * @return  {object}
 */
export const recursiveJsonParse = (collection = {}, value) => {
  // eslint-disable-next-line no-useless-escape
  if (typeof value === 'string' && /^[\[|\{](\s|.*|\w)*[\]|\}]$/.test(value)) {
    try {
      const parsedValue = JSON.parse(value);
      Object.keys(parsedValue).forEach(key => {
        // eslint-disable-next-line no-param-reassign
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
