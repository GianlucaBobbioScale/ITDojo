import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

export const CustomDialog = ({
  message,
  showDialog,
  setShowDialog,
  content,
  handleAction,
}) => {
  return (
    <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
      <DialogTitle>{message}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={handleAction} color="primary">
          Yes
        </Button>
        <Button onClick={() => setShowDialog(false)} color="secondary">
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};
