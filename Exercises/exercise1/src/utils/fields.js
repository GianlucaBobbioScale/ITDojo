import { passwordValidation } from "./fieldValidation";

//To create a new form you need to pass an array with this props
//If you want to add a validation you need use formValues.${name} to get the value of the field
//   fields: [
//     {
//       name: string,
//       type: string,
//       label: string,
//       required: boolean,
//       helperText: string,
//       validation: function, // This validation need to return an object with this props {errorExist: boolean, errorMessage: string}
//       placeholder?: string,
//     },
//   ],

export const fields = [
  {
    name: "Username",
    type: "text",
    label: "Username",
    required: true,
    helperText: "Please enter your username",
    validation: (formValues) => {
      return {
        errorExist: !/^[a-zA-Z0-9]{3,30}$/.test(formValues.Username),
        errorMessage:
          "Username must be between 3 and 30 characters long and contain only letters and numbers",
      };
    },
  },
  {
    name: "Password",
    type: "password",
    required: true,
    helperText: "Please enter your password",
    label: "Password",
    validation: (formValues) => {
      return passwordValidation(
        formValues.Password,
        formValues.ConfirmPassword
      );
    },
  },
  {
    name: "ConfirmPassword",
    type: "password",
    required: true,
    helperText: "Please enter your password again",
    label: "Confirm your password",
    validation: (formValues) => {
      return passwordValidation(
        formValues.Password,
        formValues.ConfirmPassword
      );
    },
  },
  {
    name: "Email",
    type: "email",
    required: true,
    helperText: "Please enter your email",
    label: "Email",
  },
  {
    name: "Phone",
    type: "number",
    required: false,
    helperText: "Please enter your phone number",
    label: "Phone",
  },
  {
    name: "Date of Birth",
    type: "date",
    required: false,
    helperText: "Please enter your date of birth",
    label: "Date of Birth",
  },
];
