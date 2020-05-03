import React from 'react';
import PropTypes from 'prop-types';
import { makeTheme } from '@snappmarket/ui';
import { ThemeProvider } from 'styled-components';

import faIR from '../languages/fa-IR';
import { ToolboxProvider } from './context';

const DEFAULT_OPTIONS = {
  publicPath: '/',
  importSpriteSVG: true,
  exportSvgSprite: false,
  SSR: false,
};

const Provider = ({ theme, language, options, children, ...rest }) => (
  <ThemeProvider theme={makeTheme(theme)}>
    <ToolboxProvider
      value={{
        language,
        options: { ...DEFAULT_OPTIONS, ...options },
        ...rest,
      }}
    >
      {children}
    </ToolboxProvider>
  </ThemeProvider>
);

Provider.propTypes = {
  theme: PropTypes.object,
  language: PropTypes.string,
  options: PropTypes.shape({
    importSpriteSVG: PropTypes.bool,
    SSR: PropTypes.bool,
    exportSvgSprite: PropTypes.bool,
    publicPath: PropTypes.string,
  }),
  children: PropTypes.node,
};

Provider.defaultProps = {
  language: faIR,
  options: DEFAULT_OPTIONS,
  theme: {},
};

export default Provider;
