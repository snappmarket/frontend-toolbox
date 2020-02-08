import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../resources/styles'
import theme from '../../../packages/ui/packages/Theme/src'

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}


export default Theme
