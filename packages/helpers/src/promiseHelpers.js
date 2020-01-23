import { ApiError } from '@snappmarket/helpers';

/**
 * Make a waiter
 * @param timeout
 * @returns {Promise<unknown>}
 */
export const racePromise = timeout =>
  new Promise(resolve => {
    const wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(new ApiError('RACE_TIMEOUT'));
    }, timeout);
  });

/**
 * Gives us a promise to timeout
 * @param ms
 * @returns {Promise<unknown>}
 */
export const makeTimeout = ms =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new ApiError('TIMEOUT')), ms));

/**
 * Empty promise to use as default things
 * @returns {Promise<any>}
 */
export const emptyPromise = () => new Promise(resolve => resolve({}));
