import { memo, useCallback, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
//Styles
import { useStyles } from "./styles";

const Form = ({ fields }) => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    //Set values in every change
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const newErrors = {};

      //Validate all fields
      fields.forEach((field) => {
        if (field.validation) {
          const validationResult = field.validation(formValues);
          //Set errors
          newErrors[field.name] = {
            errorExist: validationResult.errorExist,
            errorMessage: validationResult.errorMessage,
          };
        }
      });

      setErrors(newErrors);
    },
    [fields, formValues]
  );

  return (
    <Box className={classes.centerContainer}>
      <Box
        component="form"
        className={classes.formContainer}
        onSubmit={handleSubmit}
      >
        {fields.map((field) => {
          return (
            <FormControl
              fullWidth
              className={classes.formColumns}
              label={field.label}
              key={field.name}
              //Check if the field has an error and check if an error exist
              error={errors[field.name] && errors[field.name].errorExist}
            >
              <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
              <Input
                id={field.name}
                name={field.name}
                required={field.required}
                aria-describedby={field.helperText}
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
                //I need add this value because the input is controlled
                value={formValues[field.name] || ""}
                onChange={handleChange}
              />
              <FormHelperText>
                {errors[field.name] && errors[field.name].errorExist
                  ? errors[field.name].errorMessage
                  : field.helperText}
              </FormHelperText>
            </FormControl>
          );
        })}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default memo(Form);
