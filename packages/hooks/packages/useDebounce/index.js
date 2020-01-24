import { useState, useEffect } from 'react';

/**
 * Debounce setting a value
 * @param value
 * @param delay
 * @returns {[string, fn, fn]}
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
