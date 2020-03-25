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
 * @param     array                 {array}     the multi dimensional array that want to be flatten
 * @param     property              {string}    name of the property of array that want to navigate through
 * @param     flattenArrayTemp      {array}     temp array to put the result of the flatten to
 * @returns   {Array}
 */
export const deepFlatten = (array, property, flattenArrayTemp = []) => {
  const newArray = { ...array };
  delete newArray[property];
  flattenArrayTemp.push(newArray);
  if (
    array[property] &&
    Array.isArray(array[property]) &&
    array[property].length
  ) {
    array[property].forEach(item =>
      deepFlatten(item, property, flattenArrayTemp),
    );
  }
  return flattenArrayTemp;
};
