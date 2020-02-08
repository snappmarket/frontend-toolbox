import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../packages/ui/packages/Theme/src'
import GlobalStyles from './styles';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator
