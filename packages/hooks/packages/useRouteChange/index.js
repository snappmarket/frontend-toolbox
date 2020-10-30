import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * @function
 * @name useRouteChange
 * @description A hook that detect react router dom route change
 * @param fn
 */
export default function useRouteChange(fn) {
  const history = useHistory();
  useEffect(() => history.listen(fn), [history]);

  return true;
};
