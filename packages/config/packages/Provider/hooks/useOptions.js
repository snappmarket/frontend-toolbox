import { useContext } from 'react';
import ToolboxContext from '../context';
import GlobalConfig from '../config';

const useOptions = () => {
  const { options } = useContext(ToolboxContext);

  if (!options) {
    return GlobalConfig.options;
  }
  return options;
};

export default useOptions;
