import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";

const TaskItem = ({onChangeCheckbox, onClickSecondaryButton, itemText, isChecked}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox onChange={onChangeCheckbox} checked={isChecked}/>
      </ListItemIcon>
      <ListItemText primary={itemText} />
      <ListItemSecondaryAction>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onClickSecondaryButton}
        >
          Remove
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TaskItem