/**
 * Pops item from an array
 * @param baseArray
 * @param props
 * @returns {[]}
 */
export const arrayItemAddProp = (baseArray, props) => {
  const newArray = [];
  baseArray.forEach((item) => newArray.push({ ...item, ...props }));
  return newArray;
};

/**
 * Flatten array
 * @param array
 * @param property
 * @returns {[]}
 */
export const flattenArray = (array, property) => {
  const result = [];
  array.forEach((item) => {
    result.push(...item[property]);
  });
  return result;
};

/**
 * Serialize object
 * @param object
 * @returns {string}
 */
export const serializeObject = (object) => {
  const result = [];
  Object.keys(object).forEach((property) => {
    if (typeof object[property] === 'object') {
      if (Array.isArray(object[property]) && object[property].length) {
        object[property].forEach((item) => result.push(`${property}[]=${item}`));
      } else if (
        !Array.isArray(object[property])
        && Object.keys(object[property]).length
      ) {
        Object.keys(object[property]).forEach((key) => result.push(`${property}[${key}]=${object[property][key]}`));
      }
    } else if (typeof object[property] !== 'undefined') {
      result.push(`${property}=${object[property]}`);
    }
  });
  return result.join('&');
};

/**
 * Create string from array
 * @param array
 * @param properties
 * @returns {string}
 */
export const stringifyArray = (array, properties) => {
  const newArray = [];
  array.forEach((item) => {
    const filteredProperties = {};
    properties.forEach((property) => {
      filteredProperties[property] = item[property];
    });
    newArray.push(filteredProperties);
  });
  return JSON.stringify(newArray);
};

/**
 * Deep flatten an array
 * @param array
 * @param property
 * @param flattenArray
 * @returns {Array}
 */
export const deepFlatten = (array, property, flattenArray = []) => {
  const newArray = { ...array };
  delete newArray[property];
  flattenArray.push(newArray);
  if (
    array[property]
    && Array.isArray(array[property])
    && array[property].length
  ) {
    array[property].forEach((item) => deepFlatten(item, property, flattenArray));
  }
  return flattenArray;
};
