import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Detect react router dom route change
 * @param fn
 */
const useRouteChange = (fn) => {
  const history = useHistory();
  useEffect(() => history.listen(fn), [history]);
};

export default useRouteChange;
