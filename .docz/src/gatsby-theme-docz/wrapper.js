import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import GlobalStyles from '../resources/styles';
import { ToolboxProvider } from '../../../packages/config/packages';

const Theme = ({ children }) => {
  return (
    <Router history={{}}>
      <ToolboxProvider options={{
        importSpriteSVG: false,
        useSpriteFile: true,
      }} >
        <GlobalStyles />
        {children}
      </ToolboxProvider>
    </Router>
  );
};

export default Theme;
