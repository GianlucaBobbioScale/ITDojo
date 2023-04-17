import React from "react";
import {
  Button,
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const Dialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  content,
  confirmLabel = "Yes",
  showConfirmButton = true,
}) => {
  return (
    <MuiDialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        {showConfirmButton && (
          <Button onClick={onConfirm} color="primary">
            {confirmLabel}
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
