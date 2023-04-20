import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { RemoveTaskButton } from "./RemoveTaskButton";

export const TaskItem = ({
  task,
  index,
  onRemoveTask,
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
    <ListItem key={index}>
      <ListItemIcon>
        <Checkbox
          onChange={() => handleToggle(task)}
          checked={selectedTasks.includes(task)}
        />
      </ListItemIcon>
      <ListItemText primary={task} />
      <ListItemSecondaryAction>
        <RemoveTaskButton task={task} onRemoveTask={onRemoveTask} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};
