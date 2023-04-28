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

import { ButtonArray } from "./ButtonArray";

export const ListComponent = ({
  tasks,
  selectedTasksHook: { selectedTasks, setSelectedTasks },
  mainButtons,
  singleTaskAction,
}) => {
  const handleToggle = (task) => {
    const taskId = task.id;
    const currentTaskIsSelected = selectedTasks.includes(taskId);
    const newSelectedTasks = [...selectedTasks];
    if (currentTaskIsSelected) {
      const currentIndex = selectedTasks.findIndex((e) => e === taskId);
      newSelectedTasks.splice(currentIndex, 1);
    } else {
      newSelectedTasks.push(taskId);
    }
    setSelectedTasks(newSelectedTasks);
  };

  return (
    <>
      <h1>Task List</h1>
      <Box mb={2}>
        <List style={{ border: "1px solid grey" }}>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemIcon>
                <Checkbox
                  onChange={() => handleToggle(task)}
                  checked={selectedTasks.includes(task.id)}
                />
              </ListItemIcon>
              <ListItemText primary={task.content} />
              <ListItemSecondaryAction>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => singleTaskAction(task)}
                >
                  Remove
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
      <ButtonArray actions={mainButtons} variant="contained" />
    </>
  );
};
