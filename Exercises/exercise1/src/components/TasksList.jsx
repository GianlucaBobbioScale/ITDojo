import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  ListItemIcon,
  Checkbox,
  Box,
} from "@material-ui/core";
import CustomDialog from "./CustomDialog";

export default function TasksList({
  tasks = [],
  selectedTasks,
  tasksActions = {},
}) {
  const [taskToRemove, setTaskToRemove] = useState(null);
  const [showRemoveTaskDialog, setShowRemoveTaskDialog] = useState(false);

  const { removeTask, setSelectedTasks } = tasksActions;

  const handleToggle = (task) => {
    const currentIndex = selectedTasks.indexOf(task);
    const newSelectedTasks = [...selectedTasks];

    if (currentIndex === -1) {
      newSelectedTasks.push(task);
    } else {
      newSelectedTasks.splice(currentIndex, 1);
    }

    setSelectedTasks(newSelectedTasks);
  };
  const handleRemoveTask = () => {
    removeTask(taskToRemove);
    setTaskToRemove(null);
    setShowRemoveTaskDialog(false);
  };

  return (
    <Box>
      <List style={{ border: "1px solid grey" }}>
        {tasks.map((task, index) => (
          <ListItem key={index}>
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
                  setShowRemoveTaskDialog(true);
                }}
              >
                Remove
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <CustomDialog
        isOpen={showRemoveTaskDialog}
        title="Remove Task"
        onAccept={handleRemoveTask}
        onCancel={() => setShowRemoveTaskDialog(false)}
        acceptBtnName="Yes"
        cancelBtnName="No"
      >
        <p>Are you sure you want to remove the selected tasks?</p>
      </CustomDialog>
    </Box>
  );
}
