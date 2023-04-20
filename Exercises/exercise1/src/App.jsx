import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskList from './TaskList';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TaskList />
    </ThemeProvider>
  );
}

export default App;