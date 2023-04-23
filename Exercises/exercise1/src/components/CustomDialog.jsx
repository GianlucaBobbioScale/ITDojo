import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

export default function CustomDialog({
  isOpen,
  title = "",
  acceptBtnName = "Accept",
  cancelBtnName = "Cancel",
  children,
  onAccept,
  onCancel,
}) {
  if (!isOpen) return null;
  return (
    <Dialog open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onAccept} color="primary">
          {acceptBtnName}
        </Button>
        <Button onClick={onCancel} color="secondary">
          {cancelBtnName}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
