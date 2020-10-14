import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
const useResizeObserver = ref => {
  const [resizeObject, setResizeObject] = useState({
    height: 0,
    width: 0,
    top: 0,
    left: 0,
  });
  const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const { left, top, width, height } = entry.contentRect;
      setResizeObject({
        left,
        top,
        width,
        height,
      });
    });
  });

  useEffect(() => {
    if (ref && ref.current) {
      resizeObserver.observe(ref.current);
    }
  }, []);

  return resizeObject;
};

export default useResizeObserver;
