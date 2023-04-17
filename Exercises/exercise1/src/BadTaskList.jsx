import React, { useState } from "react";
import {
  List,
  Button,
  TextField,
  Box
} from "@material-ui/core";

import TaskModal from "./TaskModal";
import TaskItem from "./TaskItem";
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


  const handleRemoveTasks = () => {
    if (showRemoveTaskDialog){
      removeTask(taskToRemove)
      setTaskToRemove(null);
      setShowRemoveTaskDialog(false);
    }
    else {
      removeTasks(selectedTasks)
      setSelectedTasks([]);
      setShowRemoveTasksDialog(false)
    }
  };


  const handleOnCloseRemoveTask = () => {
    setShowRemoveTaskDialog(false)
    setShowRemoveTasksDialog(false)
  }

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
          <TaskItem key={index}
            onChangeCheckbox={() => handleToggle(task)} 
            isChecked={selectedTasks.includes(task)}
            itemText={task}
            onClickSecondaryButton={() => {
              setTaskToRemove(task);
              setShowRemoveTaskDialog(true)
            }}
          />
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
      <TaskModal showTaskDialog={showNewTaskDialog} 
          onClose={() => setShowNewTaskDialog(false)} 
          onClickPrimaryAction={handleAddTask}
          textPrimaryAction="Add Task"
          textSecondaryAction="Cancel"
          title={"Add New Task"}>
        <TextField
            label="Task Name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            fullWidth
          />
      </TaskModal>
      <TaskModal showTaskDialog={showRemoveTaskDialog || showRemoveTasksDialog} 
          onClose={handleOnCloseRemoveTask}
          onClickPrimaryAction={handleRemoveTasks}
          textPrimaryAction="Yes"
          textSecondaryAction="No"
          title={"Remove Task"}>
        {showRemoveTaskDialog && <p>Are you sure you want to remove this task?</p>}
        {showRemoveTasksDialog && <p>Are you sure you want to remove the selected tasks?</p>}
      </TaskModal>
    </Box>
  );
};

export default BadTaskList;