import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { CustomDialog } from "./CustomDialog";

export const RemoveTaskButton = ({ task, onRemoveTask }) => {
  const [showRemoveTaskDialog, setShowRemoveTaskDialog] = useState(false);
  const [taskToRemove, setTaskToRemove] = useState(null);
  const handleRemoveTask = () => {
    onRemoveTask(taskToRemove);
    setTaskToRemove(null);
    setShowRemoveTaskDialog(false);
  };
  return (
    <div>
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
      <CustomDialog
        message="Remove Task"
        showDialog={showRemoveTaskDialog}
        setShowDialog={setShowRemoveTaskDialog}
        handleAction={handleRemoveTask}
        content={<p>Are you sure you want to remove this task?</p>}
      />
    </div>
  );
};
