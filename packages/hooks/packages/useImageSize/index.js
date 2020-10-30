import { useState, useEffect } from 'react';

/**
 * Gets image url and returns [width, height]
 * @param {string} url - The image url
 */
export default url => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    if (!url) return;
    const img = document.createElement('img');
    img.addEventListener('load', e => {
      const { naturalHeight, naturalWidth } = e.target;
      setSize([naturalWidth, naturalHeight]);
    });
    img.src = url;
  }, [url]);

  return size;
};
