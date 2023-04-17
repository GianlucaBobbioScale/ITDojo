import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const ConfirmationRemoveModal = ({
  showRemoveTaskDialog,
  setShowRemoveTaskDialog,
  handleRemoveTask,
}) => {
  return (
    <Dialog
      open={showRemoveTaskDialog}
      onClose={() => setShowRemoveTaskDialog(false)}
    >
      <DialogTitle>Remove Task</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to remove this task?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRemoveTask} color="primary">
          Yes
        </Button>
        <Button
          onClick={() => setShowRemoveTaskDialog(false)}
          color="secondary"
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationRemoveModal
