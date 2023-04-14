import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  ListItemIcon,
  Checkbox,
  Box
} from "@material-ui/core";

// This works as a kind of DB
const useTaskHandler = () => {
  const [tasks, setTasksState] = useState([]);

  const setTasks = (tasks) => {
    setTasksState(tasks);
  };

  const removeTask = (taskToRemove) => {
    setTasksState(tasks.filter((task) => task !== taskToRemove));
  };

  const removeTasks = (tasksToRemove) => {
    setTasksState(tasks.filter((task) => !tasksToRemove.includes(task)));
  };

  return { tasks, setTasks, removeTask, removeTasks };
};

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
    <Box sx={{width: 500}}>
      <h1>Task List</h1>
      <Box mb={2}>
      <List style={{border: '1px solid grey'}}>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Checkbox onChange={() => handleToggle(task)} checked={selectedTasks.includes(task)} />
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
      <Button style={{marginRight: 8}} variant="contained" color="primary" onClick={() => setShowNewTaskDialog(true)}>
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
      <Dialog open={showNewTaskDialog} onClose={() => setShowNewTaskDialog(false)}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Task Name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddTask} color="primary">Add Task</Button>
          <Button onClick={() => setShowNewTaskDialog(false)} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showRemoveTaskDialog} onClose={() => setShowRemoveTaskDialog(false)}>
        <DialogTitle>Remove Task</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to remove this task?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveTask} color="primary">Yes</Button>
          <Button onClick={() => setShowRemoveTaskDialog(false)} color="secondary">No</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showRemoveTasksDialog} onClose={() => setShowRemoveTasksDialog(false)}>
        <DialogTitle>Remove Selected Tasks</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to remove the selected tasks?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveTasks} color="primary">Yes</Button>
          <Button onClick={() => setShowRemoveTasksDialog(false)} color="secondary">No</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BadTaskList;