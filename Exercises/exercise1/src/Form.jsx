import { memo } from "react";
//MUI
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";

const Form = ({ fields }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "550px",
        marginTop: "100px",
      }}
    >
      {fields.map((field) => {
        return (
          <>
            <FormControl sx={{marginTop:'15px'}}>
              {field.label}
              <Input
                id={field.name}
                required={field.required}
                aria-describedby={field.placeholder}
                type={field.type}
              />
              <FormHelperText id={field.helperText}>
                {field.helperText}
              </FormHelperText>
            </FormControl>
            <Divider/>
          </>
        );
      })}
      <Button
        variant="contained"
        onSubmit={(e) => {
          console.log("fields: ", e);
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default memo(Form);
