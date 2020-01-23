export const stringReplace = (find, replace, string) =>
  `${string}`.split(find).join(replace);

export const bulkStringReplace = (replacments, string) => {
  let modifiedString = string;
  Object.keys(replacments).forEach(key => {
    modifiedString = stringReplace(key, replacments[key], modifiedString);
  });
  return modifiedString;
};
