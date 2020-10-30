import { useRef, useEffect } from 'react';

/**
 * @function
 * @name usePreviousValue
 * @description A hook that remembers a variables previous value
 * @param value
 * @returns {undefined}
 */
export default function usePreviousValue(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
