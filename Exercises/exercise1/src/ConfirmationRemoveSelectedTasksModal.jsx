import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
const ConfirmationRemoveSelectedTasksModal = ({
  showRemoveTasksDialog,
  setShowRemoveTasksDialog,
  handleRemoveTasks,
}) => {
  return (
    <Dialog
      open={showRemoveTasksDialog}
      onClose={() => setShowRemoveTasksDialog(false)}
    >
      <DialogTitle>Remove Selected Tasks</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to remove the selected tasks?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRemoveTasks} color="primary">
          Yes
        </Button>
        <Button
          onClick={() => setShowRemoveTasksDialog(false)}
          color="secondary"
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationRemoveSelectedTasksModal