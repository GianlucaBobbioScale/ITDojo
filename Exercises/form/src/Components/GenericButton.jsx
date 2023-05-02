import {
  Button,
} from "@material-ui/core";

const DefaultButton = ({handleSubmit, label}) => {

  return (
    <Button onClick={handleSubmit}>{label}</Button>
  );
};

export default DefaultButton;