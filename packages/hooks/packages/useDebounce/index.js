import { useState, useEffect } from 'react';

/**
 * @function
 * @name useDebounce
 * @description A hook that debounce setting a value
 * @param value
 * @param delay
 * @returns {Array}
 */
export default function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  let handler;
  const canceller = () => {
    clearTimeout(handler);
  };

  useEffect(() => {
    handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return canceller;
  }, [value]);

  return [debouncedValue, canceller, setDebouncedValue];
}
