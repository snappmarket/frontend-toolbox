import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../resources/styles'
import {makeTheme} from '../../../packages/ui/packages/Theme/src'

const Theme = ({children }) => {
  return (
    <ThemeProvider theme={makeTheme()}>
      <GlobalStyles />
      {children }
    </ThemeProvider>
  )
}


export default Theme
