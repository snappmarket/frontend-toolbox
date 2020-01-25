import { useState, useCallback } from 'react';

/**
 * Force component re-render
 * @returns {Function}
 */
export default function useForceUpdate() {
  const [, setTick] = useState(0);
  return useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);
}
