import React from "react";
//MUI
import { List, Box } from "@material-ui/core";
//Components
import TaskListItem from "./TaskListItem";

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
            <TaskListItem
              task={task}
              index={index}
              handleToggle={handleToggle}
              setTaskToRemove={setTaskToRemove}
              selectedTasks={selectedTasks}
              setShowRemoveTaskDialog={setShowRemoveTaskDialog}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default TaskDisplay;
