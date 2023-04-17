import React from "react";
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

const TasksList = ({
  tasks,
  setTaskToRemove,
  setShowRemoveTaskDialog,
  selectedTasks,
  setSelectedTasks,
}) => {

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

  return (
    <Box mb={2}>
      <List
        style={{
          border: "1px solid grey",
        }}
      >
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
    </Box>
  );
};

export default TasksList;
