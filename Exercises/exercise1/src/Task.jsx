import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  ListItemIcon,
  Checkbox,
} from '@material-ui/core';

const Task = ({
  task,
  selectedTasks,
  handleToggle,
  setTaskToRemove,
  setDialog,
}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          onChange={() => handleToggle(task)}
          checked={selectedTasks.includes(task)}
        />
      </ListItemIcon>
      <ListItemText primary={task} />
      <ListItemSecondaryAction>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setTaskToRemove(task);
            setDialog({ open: true, type: 'remove' });
          }}
        >
          Remove
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;
