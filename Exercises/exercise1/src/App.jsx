import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { fields } from "./utils/fields";
import Form from "./Form";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function App(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Form fields={fields} />
    </ThemeProvider>
  );
}

export default App;
