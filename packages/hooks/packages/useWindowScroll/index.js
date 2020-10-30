import { useEffect } from 'react';

/**
 * Use window scroll
 * @param callback
 * @param hasMore
 * @param threshold
 */
export default ({ callback = () => {}, hasMore = true, threshold = 100 }) => {
  const handleScroll = () => {
    if (
      document.body.scrollHeight <=
      window.innerHeight + window.pageYOffset + threshold &&
      hasMore
    ) {
      callback();
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore,threshold]);
};
