import { useContext } from 'react';
import { context } from '../context';

const useOptions = () => {
  const { options } = useContext(context);

  return options;
};

export default useOptions;
