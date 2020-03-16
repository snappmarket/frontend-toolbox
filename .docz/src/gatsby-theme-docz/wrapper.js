import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../resources/styles';
import { makeTheme } from '../../../packages/ui/packages/Theme/src';
import { MemoryRouter as Router } from 'react-router-dom';

const Theme = ({ children }) => {
  return (
    <Router history={{}}>
      <ThemeProvider theme={makeTheme()}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default Theme;
