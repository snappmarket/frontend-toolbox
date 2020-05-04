import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { makeTheme } from '../theme';
import { ToolboxProvider } from './context';
import faIR from '../languages/fa-IR';
import GlobalConfig from './config';

const Provider = ({ theme, language, options, children, ...rest }) => {
  const unifiedOptions = { ...GlobalConfig.options, ...options };
  const unifiedTheme = makeTheme(theme);

  GlobalConfig.language = language;
  GlobalConfig.theme = unifiedTheme;
  GlobalConfig.options = unifiedOptions;

  return (
    <ToolboxProvider
      value={{
        language,
        options: unifiedOptions,
        ...rest,
      }}
    >
      <ThemeProvider theme={unifiedTheme}>{children}</ThemeProvider>
    </ToolboxProvider>
  );
};

Provider.propTypes = {
  theme: PropTypes.object,
  language: PropTypes.object,
  options: PropTypes.shape({
    SSR: PropTypes.bool,
    importSpriteSVG: PropTypes.bool,
    useSpriteFile: PropTypes.bool,
    publicPath: PropTypes.string,
  }),
  children: PropTypes.node,
};

Provider.defaultProps = {
  language: faIR,
  options: {},
  theme: {},
};

export default Provider;
