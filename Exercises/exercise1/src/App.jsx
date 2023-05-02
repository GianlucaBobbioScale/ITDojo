import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BadTaskList from './BadTaskList';
import { TasksProvider } from './contexts/tasksProvider';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <TasksProvider>
        <CssBaseline />
        <BadTaskList />
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
