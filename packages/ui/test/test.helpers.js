import React from 'react';
import { ToolboxProvider, makeTheme } from '../../config/packages';

const theme = makeTheme();

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <ToolboxProvider
    options={{
      importSpriteSVG: false,
      useSpriteFile: false,
    }}
  >
    {children}
  </ToolboxProvider>
);

export { theme, Wrapper };
