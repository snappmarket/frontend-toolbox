import { useState, useEffect } from 'react';

/**
 * @function
 * @name useImageSize
 * @description A hook that gets image url and returns [width, height]
 * @param {string} url - The image url
 * @returns {array} width, height
 */
export default function useImageSize(url) {
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
