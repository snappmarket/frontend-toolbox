import { useRef, useEffect } from 'react';

/**
 * Calls function on component update or inputs change phase
 * @param fn
 * @param inputs
 */
export default (fn, inputs) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);

  return true;
};
