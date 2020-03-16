export const stringReplace = (find, replace, string) => `${string}`.split(find).join(replace);

export const bulkStringReplace = (replacments, string) => {
  let modifiedString = string;
  Object.keys(replacments).forEach((key) => {
    modifiedString = stringReplace(key, replacments[key], modifiedString);
  });
  return modifiedString;
};
/**
 * links urls in the string
 * @author Reza Erami <reza@erami.name>
 * Wparam string
 * @return string
 */
export const autoLink = (string) => {
  const regex = /(?![^<]*>|[^<>]*<\/)((https?:)\/\/[a-z0-9&#=.\/\-?_]+)/gi;
  const template = '<a href="$1" target="_blank">$1</a>';
  return string.replace(regex, template);
};

export const getQueryParams = (url, parameter) => {
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
