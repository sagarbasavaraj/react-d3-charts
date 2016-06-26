import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import {Container} from '../base/components';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});

const App = ({children}) => (
  <MuiThemeProvider muiTheme={muiTheme}>
  <Container className="main-container">
    <AppBar
      title="React-D3-Charts" showMenuIconButton={false}
    />
      {children}
  </Container>
  </MuiThemeProvider>
);

export default App;
