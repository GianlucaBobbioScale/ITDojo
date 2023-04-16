import React, { useState } from "react";
//Mui
import { Box } from "@material-ui/core";
//Hooks
import useTaskHandler from "./hooks/useTaskHandler";
//Components
import TaskDisplay from "./components";
import ButtonList from "./components/ButtonList";
import NewTaskDialog from "./components/NewTaskDialog";
import RemoveTaskDialog from "./components/RemoveTaskDialog";

const GodTaskList = () => {
  const { tasks, setTasks, removeTask, removeTasks } = useTaskHandler();
  const [newTaskName, setNewTaskName] = useState("");
  const [showNewTaskDialog, setShowNewTaskDialog] = useState(false);
  const [taskToRemove, setTaskToRemove] = useState(null);
  const [showRemoveTaskDialog, setShowRemoveTaskDialog] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showRemoveTasksDialog, setShowRemoveTasksDialog] = useState(false);

  const handleAddTask = () => {
    setTasks([...tasks, newTaskName]);
    setNewTaskName("");
    setShowNewTaskDialog(false);
  };

  const handleRemoveTask = () => {
    removeTask(taskToRemove);
    setTaskToRemove(null);
    setShowRemoveTaskDialog(false);
  };

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
      <ButtonList
        selectedTasks={selectedTasks}
        setShowNewTaskDialog={setShowNewTaskDialog}
        setShowRemoveTasksDialog={setShowRemoveTasksDialog}
      />
      <NewTaskDialog
        showNewTaskDialog={showNewTaskDialog}
        setShowNewTaskDialog={setShowNewTaskDialog}
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        handleAddTask={handleAddTask}
      />
      <RemoveTaskDialog
        showRemoveTaskDialog={showRemoveTaskDialog}
        setShowRemoveTaskDialog={setShowRemoveTaskDialog}
        handleRemoveTask={handleRemoveTask}
        showRemoveTasksDialog={showRemoveTasksDialog}
        setShowRemoveTasksDialog={setShowRemoveTasksDialog}
        handleRemoveTasks={handleRemoveTasks}
      />
    </Box>
  );
};

export default GodTaskList;
