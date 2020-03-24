import { ApiError } from '../DebugHelpers';

/**
 * @name racePromise
 * @description makes a race promise which returns rejection error on timeout
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
 * @name makeTimeout
 * @description returns a rejected promise with TIMEOUT message
 * @param timeout
 * @returns {Promise<unknown>}
 */
export const makeTimeout = timeout =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new ApiError('TIMEOUT')), timeout),
  );

/**
 * Empty promise to use as default things
 * @returns {Promise<any>}
 */
export const emptyPromise = () => new Promise(resolve => resolve({}));
