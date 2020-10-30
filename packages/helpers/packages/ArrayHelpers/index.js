/**
 * @function
 * @name arrayItemAddProp
 * @description adds similar properties to children of an array
 * @param     baseArray   {array}     the given array to add property to items
 * @param     props       {object}    object that should be attached to each item
 * @returns  {array}
 */
export const arrayItemAddProp = (baseArray, props) => {
  const newArray = [];
  baseArray.forEach(item => newArray.push({ ...item, ...props }));
  return newArray;
};

/**
 * @function
 * @name flattenArray
 * @description makes a flat array from sub-arrays of an array
 * @param     array       {array}     given array to flatten sub-objects
 * @param     property    {string}    name of the key of the of the sub-objects that want to be merged
 * @returns   {array}
 */
export const flattenArray = (array, property) => {
  const result = [];
  array.forEach(item => {
    result.push(...item[property]);
  });
  return result;
};

/**
 * @function
 * @name stringifyArray
 * @description Create string from array
 * @param   array         {array}     base array that wants to be stringify
 * @param   properties    {array}     list of properties that want to be in stringified result
 * @returns {string}
 */
export const stringifyArray = (array, properties) => {
  const newArray = [];
  array.forEach(item => {
    const filteredProperties = {};
    properties.forEach(property => {
      filteredProperties[property] = item[property];
    });
    newArray.push(filteredProperties);
  });
  return JSON.stringify(newArray);
};

/**
 * @function
 * @name deepFlatten
 * @description Deep flatten an array
 * @param     array       {array}     the multi dimensional array that want to be flatten
 * @param     property    {string}    name of the property of array that want to navigate through
 * @param     levelKey   {string}    name of the property you want to store the level of item
 * @returns   {Array}
 */
export const deepFlatten = (array, property, levelKey = '') => {
  const result = [];
  const flatten = (items, level = 0) => {
    const itemsTemp = { ...items };
    delete itemsTemp[property];
    if (levelKey) {
      itemsTemp[levelKey] = level;
    }
    result.push({ ...itemsTemp });

    if (
      items[property] &&
      Array.isArray(items[property]) &&
      items[property].length
    ) {
      items[property].forEach(item => flatten(item, level + 1));
    }
  };
  flatten(array);
  return result;
};

/**
 * @function
 * @name arraySeparator
 * @description separates an array based on criterion into several groups
 * @param array          {array}      array of strings
 * @param separators     {object}     object of regex separators
 * @param noDuplicates   {boolean}     flag to remove duplicates
 * @returns {object}
 */
export const arraySeparator = (array, separators, noDuplicates = false) => {
  if (!array || !array.length) {
    throw new Error('array should be defined');
  }
  if (!separators || !Object.keys(separators).length) {
    throw new Error('separator should be defined');
  }
  let arrayTemp = [...array];
  const result = {};
  Object.keys(separators).forEach(key => {
    result[key] = arrayTemp.filter(item => item.match(separators[key]));
    if (noDuplicates) {
      arrayTemp = arrayTemp.filter(item => !result[key].includes(item));
    }
  });
  return result;
};

/**
 * @function
 * @name arrayMixture
 * @description mixes two arrays and based on a key places the items in correct spot
 * @param primaryArray
 * @param secondaryArray
 * @param key
 * @return {[]}
 */
export const arrayMixture = (
  primaryArray,
  secondaryArray,
  key = 'position',
) => {
  let result = [];
  primaryArray.forEach((primaryArrayItem, index) => {
    const stack = secondaryArray.filter(
      item => item[key] <= index && item[key] > index - 1,
    );
    result = [...result, ...stack, primaryArrayItem];
    if (index === primaryArray.length - 1) {
      const rest = secondaryArray.filter(
        item => item[key] > primaryArray.length - 1,
      );
      result = [...result, ...rest];
    }
  });
  return result;
};
