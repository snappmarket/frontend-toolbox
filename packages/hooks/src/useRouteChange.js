import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Determine route change
 * @param fn
 */
export default fn => {
  const history = useHistory();
  useEffect(() => history.listen(fn), [history]);
};
