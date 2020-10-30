import { useEffect, useRef } from 'react';

/**
 * @function
 * @name useFocus
 * @description A hook that focus on a ref after render
 * @param initialRef
 * @returns {React.MutableRefObject<*>}
 */
export default function useFocus(initialRef) {
  const ref = useRef(initialRef);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref.current]);

  return ref;
};
