import { recursiveJsonParse } from '../JsonHelpers';

/**
 * @function
 * @name getLocalStorageData
 * @description gets the local storage data, deep parsed to json
 * @param key   {string}    key of the item in the local storage
 * @return {string|Object}
 */
export const getLocalStorageData = key => {
  try {
    const collection = {};
    return recursiveJsonParse(collection, localStorage.getItem(key));
  } catch (error) {
    throw new Error(error);
  }
};
