import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Dialog from "./Dialog";

const Actions = ({
  createLabel = "New",
  removeLabel = "Remove",
  onCreate,
  onRemove,
  isRemoveDisabled = false,
  newItemName,
  setNewItemName,
  isItemDuplicated,
}) => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [openDuplicatedTaskDialog, setOpenDuplicatedTaskDialog] =
    useState(false);

  return (
    <>
      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={() => setShowCreateDialog(true)}
      >
        {createLabel}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setShowRemoveDialog(true)}
        disabled={isRemoveDisabled}
      >
        {removeLabel}
      </Button>
      <Dialog
        isOpen={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        onConfirm={() => {
          if (!isItemDuplicated) {
            onCreate();
            setShowCreateDialog(false);
          } else {
            setOpenDuplicatedTaskDialog(true);
          }
        }}
        title="Add new item"
        content={
          <TextField
            label="Name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            fullWidth
          />
        }
        confirmLabel="Add"
      />
      <Dialog
        isOpen={showRemoveDialog}
        onClose={() => setShowRemoveDialog(false)}
        onConfirm={() => {
          onRemove();
          setShowRemoveDialog(false);
        }}
        title="Remove"
        content={<p>Are you sure you want to remove the selected items?</p>}
      />
      <Dialog
        isOpen={openDuplicatedTaskDialog}
        onClose={() => setOpenDuplicatedTaskDialog(false)}
        onConfirm={() => {
          setOpenDuplicatedTaskDialog(false);
        }}
        title="Duplicated Task"
        content={<p>This task is already created.</p>}
        showConfirmButton={false}
      />
    </>
  );
};

export default Actions;
