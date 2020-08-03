/**
 * @function
 * @name removeByKey
 * @description returns an object without given key
 * @param   haystack    {object}    object you want to remove key from
 * @param   needle      {string}    key you want to remove from object
 * @return  {object}
 */
export const removeByKey = (haystack, needle) =>
  Object.keys(haystack)
    .filter(key => {
      if (Number.isInteger(needle))
        return parseInt(key, 0) !== parseInt(needle, 0);
      return key !== needle;
    })
    .reduce((result, current) => {
      // eslint-disable-next-line no-param-reassign
      result[current] = haystack[current];
      return result;
    }, {});

/**
 * @function
 * @name flattenObject
 * @description recursively flattens an object, properties keys would be combination of parent and sub-object keys
 * @param   object    {object}    object you want to make it single dimensional
 * @return  {object}
 */
export const flattenObject = object => {
  const result = {};

  // eslint-disable-next-line no-restricted-syntax
  Object.keys(object).forEach(key => {
    if (typeof object[key] === 'object' && object[key] !== null) {
      const flatObject = flattenObject(object[key]);
      Object.keys(flatObject).forEach(itemKey => {
        result[`${key}.${itemKey}`] = flatObject[itemKey];
      });
    } else {
      result[key] = object[key];
    }
  });
  return result;
};

/**
 * @function
 * @name safeObjectPropertyRead
 * @description reads properties of an object safely and avoids to throw an error if property or object are undefined
 * @param   object          {object}    object you want to get value from
 * @param   key             {string}    key of the object you want to get it's value
 * @param   defaultValue    {any}       default value of what you want if it was undefiend
 * @returns {any}
 */
export const safeObjectPropertyRead = (
  object,
  key,
  defaultValue = undefined,
) => {
  const result = key.split('.').reduce((nestedObject, index) => {
    if (nestedObject && index in nestedObject) {
      return nestedObject[index];
    }
    return undefined;
  }, object);

  return result !== undefined ? result : defaultValue;
};

/**
 * @function
 * @name getNextProp
 * @description returns the next property of given property in an object
 * @param   object    {object}    object you want navigate through
 * @param   key       {string}    name of the key you want to get next prop right after
 * @returns {any}
 */
export const getNextProp = (object, key) => {
  const keys = Object.keys(object);
  const index = keys.indexOf(key);
  return index !== -1 && keys[index + 1] && object[keys[index + 1]];
};

/**
 * @function
 * @name serializeObject
 * @description serializes the properties of given object
 * @param   object    {object}    object to be serialized by keys
 * @returns {string}
 */
export const serializeObject = object => {
  if (!object || typeof object !== 'object') {
    return '';
  }
  const result = [];
  Object.keys(object).forEach(property => {
    const prop = object[property];
    if (typeof prop === 'object' && prop !== null) {
      if (Array.isArray(prop) && prop.length) {
        prop.forEach(item => result.push(`${property}[]=${item}`));
      } else if (!Array.isArray(prop) && Object.keys(prop).length) {
        Object.keys(prop).forEach(key =>
          result.push(`${property}[${key}]=${prop[key]}`),
        );
      }
    } else if (typeof prop !== 'undefined' && prop !== null) {
      result.push(`${property}=${prop}`);
    }
  });
  return result.join('&');
};

/**
 * @function
 * @name removeManyByKeys
 * @description returns an object without given keys
 * @param   haystack    {object}            object you want to remove key from
 * @param   needles     {Array.<string>}    keys you want to remove from object
 * @return  {object}
 */
export const removeManyByKeys = (haystack, needles) =>
  Object.keys(haystack)
    .filter(key => !needles.includes(key))
    .reduce((result, current) => {
      // eslint-disable-next-line no-param-reassign
      result[current] = haystack[current];
      return result;
    }, {});

/**
 * @function
 * @name deepMerge
 * @description merges two object in all levels
 * @param primaryObject       {object}      base object
 * @param secondaryObject     {object}      other object you want to merge with base object
 * @return {object}
 */
export const deepMerge = (primaryObject, secondaryObject) =>{
  const primaryObjectClone = {...primaryObject};
  Object.keys(secondaryObject).forEach(key => {
    if(!primaryObjectClone[key]){
      primaryObjectClone[key] = secondaryObject[key];
    }
    else if(Array.isArray(secondaryObject[key])){
      primaryObjectClone[key] = [...primaryObjectClone[key], ...secondaryObject[key]]
    }
    else if(typeof secondaryObject[key] === "object"){
      primaryObjectClone[key] = deepMerge(primaryObjectClone[key], secondaryObject[key]);
    }
    else {
      primaryObjectClone[key] = secondaryObject[key]
    }
  });
  return primaryObjectClone;
}
