import { ApiError } from 'constants/Helpers/debugHelper';
import apiErrorMapper from 'constants/apiErrorMapper';

/**
 * Make a waiter
 * @param timeout
 * @returns {Promise<unknown>}
 */
export const racePromise = timeout =>
  new Promise(resolve => {
    const wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(new ApiError(apiErrorMapper.RACE_TIMEOUT));
    }, timeout);
  });

/**
 * Gives us a promise to timeout
 * @param ms
 * @returns {Promise<unknown>}
 */
export const makeTimeout = ms =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new ApiError(apiErrorMapper.TIMEOUT)), ms),
  );

/**
 * Empty promise to use as default things
 * @returns {Promise<any>}
 */
export const emptyPromise = () => new Promise(resolve => resolve({}));
