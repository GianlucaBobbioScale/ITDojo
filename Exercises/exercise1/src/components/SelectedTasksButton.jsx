import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { CustomDialog } from "./CustomDialog";

export const SelectedTasksButton = ({ selectedTasks, onRemoveTasks }) => {
  const [showRemoveTasksDialog, setShowRemoveTasksDialog] = useState(false);

  const handleRemoveTasks = () => {
    onRemoveTasks();
    setShowRemoveTasksDialog(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setShowRemoveTasksDialog(true)}
        disabled={selectedTasks.length === 0}
      >
        Remove Selected Tasks
      </Button>
      <CustomDialog
        message="Remove Selected Tasks"
        showDialog={showRemoveTasksDialog}
        setShowDialog={setShowRemoveTasksDialog}
        handleAction={handleRemoveTasks}
        content={<p>Are you sure you want to remove the selected tasks?</p>}
      />
    </div>
  );
};
