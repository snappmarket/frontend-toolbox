import { deepMerge } from '@snappmarket/helpers';
const defaultTheme = {
  defaultRem: '1rem',
  defaultFont: 'IRANSans',
  containerWidth: '1628px',

  colors: {
    blue: {
      bright: '#f2f7ff',
      'ultra-light': '#a5c8fc',
      light: '#556ff7',
      normal: '#2446f5',
      dark: '#0a2cdc',
    },
    green: {
      bright: '#e7feea',
      'ultra-light': '#aef0b8',
      light: '#10e02c',
      normal: '#07bc20',
      dark: '#058b18',
    },
    red: {
      bright: '#fff6f5',
      'ultra-light': '#ffbfc3',
      light: '#ff6973',
      normal: '#ff3643',
      dark: '#ff0313',
    },
    orange: {
      bright: '#fff8f2',
      'ultra-light': '#fcd0a5',
      light: '#ff9747',
      normal: '#ff7a14',
      dark: '#e06100',
    },
    yellow: {
      bright: '#fffcef',
      'ultra-light': '#ffeb98',
      light: '#ffdc47',
      normal: '#b7963a',
      dark: '#af8b28',
    },
    gray: {
      bright: '#fafafa',
      'ultra-light': '#eeeeee',
      light: '#bdbdbd',
      normal: '#757575',
      dark: '#424242',
    },
    white: '#ffffff',
    taupe: '#292929',
    black: '#000000',
    transparent: 'transparent',
  },

  viewports: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

export const makeTheme = (theme = {}) => deepMerge(defaultTheme, theme);
export default defaultTheme;
