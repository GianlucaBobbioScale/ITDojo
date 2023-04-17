import React from "react";
//MUI
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
//Components
import ButtonList from "./ButtonList";

const TaskDisplay = ({
  tasks,
  selectedTasks,
  handleToggle,
  setTaskToRemove,
  setShowRemoveTaskDialog,
  setShowNewTaskDialog,
  setShowRemoveTasksDialog
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
      {/* I think this component here is wrong, Because this file is called TaskDisplay.
       The only function it should have is to show the tasks, not buttons. */}
      <ButtonList
        selectedTasks={selectedTasks}
        setShowNewTaskDialog={setShowNewTaskDialog}
        setShowRemoveTasksDialog={setShowRemoveTasksDialog}
      />
    </Box>
  );
};

export default TaskDisplay;
