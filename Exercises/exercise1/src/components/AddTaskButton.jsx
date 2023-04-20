import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { CustomDialog } from "./CustomDialog";

export const AddTaskButton = ({ onSubmitTask }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [showNewTaskDialog, setShowNewTaskDialog] = useState(false);

  const handleAddTask = () => {
    onSubmitTask(newTaskName);
    setNewTaskName("");
    setShowNewTaskDialog(false);
  };
  return (
    <div>
      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={() => setShowNewTaskDialog(true)}
      >
        New Task
      </Button>
      <CustomDialog
        message="Add New Task"
        showDialog={showNewTaskDialog}
        setShowDialog={setShowNewTaskDialog}
        handleAction={handleAddTask}
        content={
          <TextField
            label="Task Name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            fullWidth
          />
        }
      />
    </div>
  );
};
