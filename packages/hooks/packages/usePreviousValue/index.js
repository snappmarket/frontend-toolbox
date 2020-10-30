import { useRef, useEffect } from 'react';

/**
 * Remember a variables previous value
 * @param value
 * @returns {undefined}
 */
const usePreviousValue = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePreviousValue;
