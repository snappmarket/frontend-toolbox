import { ApiError } from '../DebugHelpers';

/**
 * @function
 * @name racePromise
 * @description makes a race promise which returns rejection error on timeout
 * @param   timeout   {number}    timout in ms to throw an error with resolve
 * @returns {Promise<unknown>}
 */
export const racePromise = timeout =>
  new Promise(resolve => {
    const wait = setTimeout(() => {
      clearTimeout(wait);
      resolve('RACE_TIMEOUT');
    }, timeout);
  });

/**
 * @function
 * @name makeTimeout
 * @description returns a rejected promise with TIMEOUT message
 * @param   timeout   {number}    timout in ms to throw an error with promise reject
 * @returns {Promise<unknown>}
 */
export const makeTimeout = timeout =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new ApiError('TIMEOUT')), timeout),
  );

/**
 * @function
 * Empty promise to use as default things
 * @returns {Promise<any>}
 */
export const emptyPromise = () => new Promise(resolve => resolve({}));

/**
 * @function
 * @name sleep
 * @description makes a promise which resolves after a delay
 * @param delay
 * @returns {Promise<unknown>}
 */
export const sleep = delay =>
  new Promise(resolve => setTimeout(() => resolve(), delay));
