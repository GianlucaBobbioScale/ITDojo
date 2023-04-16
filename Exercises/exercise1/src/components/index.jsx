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

const TaskDisplay = ({
  tasks,
  selectedTasks,
  handleToggle,
  setTaskToRemove,
  setShowRemoveTaskDialog,
}) => {
  return (
    <Box>
      <Box component="h1">Task List</Box>
      <Box mb={2}>
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
      </Box>
    </Box>
  );
};

export default TaskDisplay;
