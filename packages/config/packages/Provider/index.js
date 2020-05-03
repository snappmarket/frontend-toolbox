import React from 'react';
import PropTypes from 'prop-types';
import { makeTheme } from '@snappmarket/ui';
import { ThemeProvider } from 'styled-components';

import { ToolboxProvider } from './context';

const Provider = ({
  theme,
  children,
  exportSvgSprite,
  publicPath,
  language,
  ...rest
}) => (
  <ThemeProvider theme={makeTheme(theme)}>
    <ToolboxProvider
      value={{
        language,
        publicPath,
        exportSvgSprite,
        ...rest,
      }}
    >
      {children}
    </ToolboxProvider>
  </ThemeProvider>
);

Provider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
  language: PropTypes.string,
  publicPath: PropTypes.string,
  exportSvgSprite: PropTypes.bool,
};

Provider.defaultProps = {
  publicPath: '/',
  language: 'fa-IR',
  exportSvgSprite: false,
};

export default Provider;
