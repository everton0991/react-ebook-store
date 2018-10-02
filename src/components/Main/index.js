import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat"'
  },
})

class Main extends Component {
  render() {
    const { children } = this.props
    
    return (
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    )
  }
}

export default Main
