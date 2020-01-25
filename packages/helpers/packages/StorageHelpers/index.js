import { recursiveJsonParse } from '../JsonHelpers';

export const getLocalStorageData = (key) => {
  try {
    const collection = {};
    return recursiveJsonParse(collection, localStorage.getItem(key));
  } catch (error) {
    throw new Error(error);
  }
};
