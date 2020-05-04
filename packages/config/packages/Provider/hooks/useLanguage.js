import { useContext } from 'react';
import ToolboxContext from '../context';

const useLanguage = () => {
  const { language } = useContext(ToolboxContext);
  return language;
};

export default useLanguage;
