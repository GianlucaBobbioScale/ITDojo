import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const TaskModal = ({title,showTaskDialog, onClose, onClickPrimaryAction, textPrimaryAction, textSecondaryAction, children}) => {

  return (
    <Dialog open={showTaskDialog} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickPrimaryAction} color="primary">{textPrimaryAction}</Button>
        <Button onClick={onClose} color="secondary">{textSecondaryAction}</Button>
      </DialogActions>
    </Dialog>
  )
}

export default TaskModal