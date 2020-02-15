export const stringReplace = (find, replace, string) => `${string}`.split(find).join(replace);

export const bulkStringReplace = (replacments, string) => {
  let modifiedString = string;
  Object.keys(replacments).forEach((key) => {
    modifiedString = stringReplace(key, replacments[key], modifiedString);
  });
  return modifiedString;
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
