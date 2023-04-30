import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
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
  formColumns:{
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  }
});
