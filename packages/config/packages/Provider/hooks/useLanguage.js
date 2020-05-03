import { useContext } from 'react';
import { context } from '../context';

const useLanguage = () => {
  const { language } = useContext(context);
  return language
};

export default useLanguage;
