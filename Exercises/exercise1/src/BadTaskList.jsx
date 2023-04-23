import React, { useState } from "react";
import { Button, TextField, Box } from "@material-ui/core";
import CustomDialog from "./components/CustomDialog";
import useTaskHandler from "./hooks.js/useTaskHandler";
import TasksList from "./components/TasksList";

// This works as a kind of DB

const BadTaskList = () => {
  const { tasks, setTasks, removeTask, removeTasks } = useTaskHandler();

  const [newTaskName, setNewTaskName] = useState("");
  const [showNewTaskDialog, setShowNewTaskDialog] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showRemoveTasksDialog, setShowRemoveTasksDialog] = useState(false);

  const handleAddTask = () => {
    setTasks([...tasks, newTaskName]);
    setNewTaskName("");
    setShowNewTaskDialog(false);
  };

  const handleRemoveTasks = () => {
    removeTasks(selectedTasks);
    setSelectedTasks([]);
    setShowRemoveTasksDialog(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <h1>Task List</h1>
      <Box mb={2}>
        <TasksList
          tasks={tasks}
          tasksActions={{ removeTask, setSelectedTasks }}
          selectedTasks={selectedTasks}
        />
      </Box>

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
      {/* modal + input*/}
      <CustomDialog
        isOpen={showNewTaskDialog}
        title="Add New Task"
        onAccept={handleAddTask}
        onCancel={() => setShowNewTaskDialog(false)}
        acceptBtnName="Add Task"
      >
        <TextField
          label="Task Name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          fullWidth
        />
      </CustomDialog>

      <CustomDialog
        isOpen={showRemoveTasksDialog}
        title="Remove Selected Tasks"
        onAccept={handleRemoveTasks}
        onCancel={() => setShowRemoveTasksDialog(false)}
        acceptBtnName="Yes"
        cancelBtnName="No"
      >
        <p>Are you sure you want to remove the selected tasks?</p>
      </CustomDialog>
    </Box>
  );
};

export default BadTaskList;
