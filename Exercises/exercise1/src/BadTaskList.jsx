import React, { useState } from "react";
import ConfirmationRemoveSelectedTasksModal from "./ConfirmationRemoveSelectedTasksModal";
import ConfirmationRemoveModal from "./ConfirmationRemoveModal";
import AddNewTaskModal from "./AddNewTaskModal";
import TasksList from "./TasksList";
import { Button, Box } from "@material-ui/core";
import { useTaskHandler } from "./useTaskHandler";

const BadTaskList = () => {
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

  return (
    <Box sx={{ width: 500 }}>
      <h1>Task List</h1>
      <TasksList
        tasks={tasks}
        setTaskToRemove={setTaskToRemove}
        setShowRemoveTaskDialog={setShowRemoveTaskDialog}
        selectedTasks={selectedTasks}
        setSelectedTasks={setSelectedTasks}
      />
      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={() => setShowNewTaskDialog(true)}
      >
        New Task
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setShowRemoveTasksDialog(true)}
        disabled={selectedTasks.length === 0}
      >
        Remove Selected Tasks
      </Button>
      <AddNewTaskModal
        showNewTaskDialog={showNewTaskDialog}
        setShowNewTaskDialog={setShowNewTaskDialog}
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        handleAddTask={handleAddTask}
      />
      <ConfirmationRemoveModal
        showRemoveTaskDialog={showRemoveTaskDialog}
        setShowRemoveTaskDialog={setShowRemoveTaskDialog}
        handleRemoveTask={handleRemoveTask}
      />
      <ConfirmationRemoveSelectedTasksModal
        showRemoveTasksDialog={showRemoveTasksDialog}
        setShowRemoveTasksDialog={setShowRemoveTasksDialog}
        handleRemoveTasks={handleRemoveTasks}
      />
    </Box>
  );
};

export default BadTaskList;
