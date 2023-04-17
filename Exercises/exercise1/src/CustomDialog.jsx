import React, { useMemo } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@material-ui/core';

const CustomDialog = ({
  dialog,
  setDialog,
  handleAddTask,
  handleRemoveTask,
  handleRemoveTasks,
  newTaskName,
  setNewTaskName,
}) => {
  const DialogTypeContent = useMemo(() => {
    switch (dialog.type) {
      case 'add':
        return (
          <>
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
              <Button onClick={handleAddTask} color="primary">
                Add Task
              </Button>
              <Button
                onClick={() => setDialog({ open: false, type: '' })}
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </>
        );

      case 'remove':
        return (
          <>
            <DialogTitle>Remove Task</DialogTitle>
            <DialogContent>
              <p>Are you sure you want to remove this task?</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRemoveTask} color="primary">
                Yes
              </Button>
              <Button
                onClick={() => setDialog({ open: false, type: '' })}
                color="secondary"
              >
                No
              </Button>
            </DialogActions>
          </>
        );

      case 'bulkRemove':
        return (
          <>
            <DialogTitle>Remove Selected Tasks</DialogTitle>
            <DialogContent>
              <p>Are you sure you want to remove the selected tasks?</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRemoveTasks} color="primary">
                Yes
              </Button>
              <Button
                onClick={() => setDialog({ open: false, type: '' })}
                color="secondary"
              >
                No
              </Button>
            </DialogActions>
          </>
        );

      default:
        return null;
    }
  }, [
    dialog.type,
    handleAddTask,
    handleRemoveTask,
    handleRemoveTasks,
    newTaskName,
    setDialog,
    setNewTaskName,
  ]);

  return (
    <Dialog
      open={dialog.open}
      onClose={() => setDialog({ open: false, type: '' })}
    >
      {DialogTypeContent}
    </Dialog>
  );
};

export default CustomDialog;
