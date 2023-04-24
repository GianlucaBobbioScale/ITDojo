import React, { useState } from "react";
//Mui
import { Box } from "@material-ui/core";
//Hooks
import useTaskHandler from "./hooks/useTaskHandler";
//Components
import TaskDisplay from "./components";
import NewTaskDialog from "./components/NewTaskDialog";
import RemoveTaskDialog from "./components/RemoveTaskDialog";

const GodTaskList = () => {
  const { tasks,addNewTask,removeTask, removeTasks } = useTaskHandler();
  const [showNewTaskDialog, setShowNewTaskDialog] = useState(false);
  const [taskToRemove, setTaskToRemove] = useState(null);
  const [showRemoveTaskDialog, setShowRemoveTaskDialog] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showRemoveTasksDialog, setShowRemoveTasksDialog] = useState(false);

  const handleRemoveTasks = () => {
    removeTasks(selectedTasks);
    setSelectedTasks([]);
    setShowRemoveTasksDialog(false);
  };

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
    <Box sx={{ width: 500 }}>
      <TaskDisplay
        tasks={tasks}
        selectedTasks={selectedTasks}
        handleToggle={handleToggle}
        setTaskToRemove={setTaskToRemove}
        setShowRemoveTaskDialog={setShowRemoveTaskDialog}
      />
      <NewTaskDialog
        showNewTaskDialog={showNewTaskDialog}
        setShowNewTaskDialog={setShowNewTaskDialog}
        addNewTask={addNewTask}
      />
      <RemoveTaskDialog
        selectedTasks={selectedTasks}
        taskToRemove={taskToRemove}
        removeTask={removeTask}
        setTaskToRemove={setTaskToRemove}
        showRemoveTaskDialog={showRemoveTaskDialog}
        setShowRemoveTaskDialog={setShowRemoveTaskDialog}
        showRemoveTasksDialog={showRemoveTasksDialog}
        setShowRemoveTasksDialog={setShowRemoveTasksDialog}
        handleRemoveTasks={handleRemoveTasks}
      />
    </Box>
  );
};

export default GodTaskList;
