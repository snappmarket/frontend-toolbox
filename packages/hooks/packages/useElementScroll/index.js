import {useEffect} from 'react';

/**
 * @function
 * @name useElementScroll
 * @description Use elemenet scroll
 * @param reference
 * @param callback
 * @param hasMore
 * @param threshold
 */
export default function useElementScroll({
  reference,
  callback = () => {},
  hasMore = true,
  threshold = 100,
}) {
  const handleScroll = () => {
    if (
      reference.current.scrollHeight <=
      reference.current.offsetHeight +
      reference.current.scrollTop +
      threshold &&
      hasMore
    ) {
      callback();
    }
  };
  useEffect(() => {
    reference.current.addEventListener('scroll', handleScroll);
    return () => {
      reference.current.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore,threshold]);
};
