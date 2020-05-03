import { useContext } from 'react';
import { context } from '../context';
import languages from '../../languages';

const useLanguage = () => {
  const { language } = useContext(context);
  return languages[language];
};

export default useLanguage;
