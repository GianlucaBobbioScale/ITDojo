import React, { useState } from 'react';
import { List, Button, Box } from '@material-ui/core';

import Task from './Task';
import CustomDialog from './CustomDialog';

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
  const [newTaskName, setNewTaskName] = useState('');
  const [taskToRemove, setTaskToRemove] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [dialog, setDialog] = useState({ open: false, type: '' });

  const handleAddTask = () => {
    setTasks([...tasks, newTaskName]);
    setNewTaskName('');
    setDialog({ open: false, type: '' });
  };

  const handleRemoveTask = () => {
    removeTask(taskToRemove);
    setTaskToRemove(null);
    setDialog({ open: false, type: '' });
  };

  const handleRemoveTasks = () => {
    removeTasks(selectedTasks);
    setSelectedTasks([]);
    setDialog({ open: false, type: '' });
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
      <h1>Task List</h1>
      <Box mb={2}>
        <List style={{ border: '1px solid grey' }}>
          {tasks.map((task, index) => (
            <Task
              key={index}
              {...{
                task,
                selectedTasks,
                handleToggle,
                setTaskToRemove,
                setDialog,
              }}
            />
          ))}
        </List>
      </Box>
      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={() => setDialog({ open: true, type: 'add' })}
      >
        New Task
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setDialog({ open: true, type: 'bulkRemove' })}
        disabled={selectedTasks.length === 0}
      >
        Remove Selected Tasks
      </Button>
      <CustomDialog
        {...{
          dialog,
          setDialog,
          newTaskName,
          setNewTaskName,
          handleAddTask,
          handleRemoveTask,
          handleRemoveTasks,
        }}
      />
    </Box>
  );
};

export default BadTaskList;
