import React, { useCallback, useState } from "react";
//Mui
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";

const NewTaskDialog = ({
  showNewTaskDialog,
  setShowNewTaskDialog,
  addNewTask,
}) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleAddTask = useCallback(() => {
    addNewTask(newTaskName);
    setNewTaskName("");
    setShowNewTaskDialog(false);
  }, [addNewTask, newTaskName, setShowNewTaskDialog]);

  return (
    <>
      <Dialog
        open={showNewTaskDialog}
        onClose={() => setShowNewTaskDialog(false)}
      >
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
          <Button onClick={() => handleAddTask()} color="primary">
            Add Task
          </Button>
          <Button onClick={() => setShowNewTaskDialog(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={() => setShowNewTaskDialog(true)}
      >
        New Task
      </Button>
    </>
  );
};

export default NewTaskDialog;
