import { useContext } from 'react';
import { context } from '../context';
import GlobalConfig from '../config';

const useOptions = () => {
  const { options } = useContext(context);

  if (!options) {
    return GlobalConfig.options;
  }
  return options;
};

export default useOptions;
