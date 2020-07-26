import React from 'react';
import PropTypes from 'prop-types';
import { ToolboxProvider, makeTheme } from '@snappmarket/config';

const theme = makeTheme();

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children, options }) => (
  <ToolboxProvider options={options}>{children}</ToolboxProvider>
);

Wrapper.defaultProps = {
  options: PropTypes.object,
};

Wrapper.defaultProps = {
  options: {
    importSpriteSVG: false,
    useSpriteFile: false,
  },
};

export { theme, Wrapper };
