import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import BadTaskList from './BadTaskList';
import Form from "./Form";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const fields = [
  {
    name: "Username",
    type: "text",
    required: true,
    placeholder: "Enter your username",
    helperText: "Please enter your username",
    label: "Username",
  },
  {
    name: "Password",
    type: "password",
    required: true,
    placeholder: "Enter your password",
    helperText: "Please enter your password",
    label: "Password",
  },
  {
    name: "Email",
    type: "string",
    required: true,
    placeholder: "Enter your email",
    helperText: "Please enter your email",
    label: "Email",
  },
  {
    name: "Phone",
    //TODO: define type
    type: "number",
    required: false,
    placeholder: "Enter your phone number",
    helperText: "Please enter your phone number",
    label: "Phone",
  },
  {
    name: "Date of Birth",
    type: "date",
    required: false,
    placeholder: "Enter your date of birth",
    helperText: "Please enter your date of birth",
    label: "Date of Birth",
  },
];

function App(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Form fields={fields} />
    </ThemeProvider>
  );
}

export default App;
