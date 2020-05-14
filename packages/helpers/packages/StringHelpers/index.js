/**
 * @function
 * @name stringReplace
 * @description replace a string with another in a text
 * @param find      {string}    string you want to be replaced
 * @param replace   {string}    string you wont to replace
 * @param string    {string}    string you want to modify
 * @return {string}
 */
export const stringReplace = (find, replace, string) =>
  `${string}`.replace(new RegExp(find, 'g'), replace);

/**
 * @function
 * @name bulkStringReplace
 * @description replaces multiple strings in a text
 * @param replacments   {object}    object of replacement, key is string you want to find, and value is the string you want to replace
 * @param string        {string}    string you want to modify
 * @return {*}
 */
export const bulkStringReplace = (replacments, string) => {
  let modifiedString = string;
  Object.keys(replacments).forEach(key => {
    modifiedString = stringReplace(key, replacments[key], modifiedString);
  });
  return modifiedString;
};
/**
 * @function
 * @name autoLink
 * @description links urls in the string
 * @author Reza Erami <reza@erami.name>
 * @param string    {string}    string you want to make URLs linked
 * @return string
 */
export const autoLink = string => {
  // eslint-disable-next-line no-useless-escape
  const regex = /(?![^<]*>|[^<>]*<\/)((https?:)\/\/[a-z0-9&#=.\/\-?_]+)/gi;
  const template = '<a href="$1" target="_blank">$1</a>';
  return string.replace(regex, template);
};

/**
 * @function
 * @name getQueryParams
 * @description gets value of a query parameter
 * @param url
 * @param parameter
 * @return {string|null}
 */
export const getQueryParams = (url, parameter) => {
  // eslint-disable-next-line no-useless-escape
  const myParameter = parameter.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${myParameter}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

/**
 * @function
 * @name camelToSnakeCase
 * @description Convert camelCase string to snake_case
 * @param    string    {string}     string you want to change from camel to snake case
 * @returns  {string}
 */
export const camelToSnakeCase = string =>
  string.replace(/([A-Z])/g, char => `_${char.toLowerCase()}`);
