import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "500px",
    width: "600px",
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formColumns: {
    marginBottom: "20px",
    width: "100%",
  },
  halfWidthFormControl: {
    width: "50%",
    marginBottom: "20px",
  },
}));
