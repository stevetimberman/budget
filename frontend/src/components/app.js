import React from 'react'
import CommonComponents from './common'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#16ffbd',
    },
    secondary: {
      main: '#edb5bf',
    },
    
  },
});


export default ({ children }) => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        {children}
      </ MuiThemeProvider>
    </div>
  );
};
