import { useEffect, useRef } from 'react';

/**
 * Focus on a ref after render
 * @param initialRef
 * @returns {React.MutableRefObject<*>}
 */
export default initialRef => {
  const ref = useRef(initialRef);
  useEffect(() => {
    setTimeout(() => {
      ref.current.focus();
    }, 100);
  }, []);

  return ref;
};
