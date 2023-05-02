import React from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

const CustomDialog = ({ title, content, open, onClose, actions }) => {
  if (!open) return null;
  return (
    <Dialog {...{ open, onClose }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
