import React, { useCallback, useState } from 'react';

import CustomDialog from './CustomDialog';
import { Button, TextField } from '@material-ui/core';
import useTaskHandler from '../contexts/tasksProvider';

const NewTask = () => {
  const { addTask } = useTaskHandler();
  const [newTaskName, setNewTaskName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleShowDialog = useCallback(() => {
    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen]);

  const handleAddTask = useCallback(() => {
    addTask(newTaskName);
    setNewTaskName('');
    toggleShowDialog();
  }, [addTask, newTaskName, toggleShowDialog]);

  return (
    <>
      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={() => {
          toggleShowDialog();
        }}
      >
        New Task
      </Button>
      <CustomDialog
        {...{
          open: isDialogOpen,
          onClose: toggleShowDialog,
          title: 'Add Task',
          content: (
            <TextField
              label="Task Name"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              fullWidth
            />
          ),
          actions: (
            <>
              <Button onClick={handleAddTask} color="primary">
                Add Task
              </Button>
              <Button onClick={() => toggleShowDialog()} color="secondary">
                Cancel
              </Button>
            </>
          ),
        }}
      />
    </>
  );
};

export default NewTask;
