import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Form from './Form';
import {inputs} from './inputs'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});


function App(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Form inputs={inputs}/>
    </ThemeProvider>
  );
}

export default App;