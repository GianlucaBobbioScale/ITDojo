import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { ButtonArray } from "./ButtonArray";

export const DialogElement = ({
  open,
  onClose,
  dialogContent: { title, actions, content },
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <ButtonArray actions={actions} variant="text" />
      </DialogActions>
    </Dialog>
  );
};
