import { useEffect, useRef, useCallback } from 'react';

/**
 * @function
 * @name useTimeout
 * @description A hook that calls a callback after a delay
 * @param callback
 * @param delay
 * @returns {{reset: *}}
 */
export default function useTimeout(callback, delay) {
  // save id in a ref
  const timeoutId = useRef('');

  // save callback as a ref so we can update the timeout callback without resetting the clock
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // clear the timeout and start a new one, updating the timeoutId ref
  const reset = useCallback(() => {
    clearTimeout(timeoutId.current);

    const id = setTimeout(savedCallback.current, delay);
    timeoutId.current = id;
  }, [delay]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (delay !== null) {
      reset();

      return () => clearTimeout(timeoutId.current);
    }
  }, [delay, reset]);

  return { reset };
};
