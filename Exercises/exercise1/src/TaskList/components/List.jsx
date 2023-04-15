import React, { useState } from "react";
import {
  List as MuiList,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";
import Dialog from "./Dialog";

const List = ({ items, selectedItems, setSelectedItems, removeItem }) => {
  const [showRemoveItemDialog, setShowRemoveItemDialog] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleRemoveItem = () => {
    setSelectedItems((prevState) => {
      removeItem(itemToRemove);
      const index = prevState.indexOf(itemToRemove);
      if (index !== -1) {
        const updatedSelectedItems = [...prevState];
        updatedSelectedItems.splice(index, 1);
        return updatedSelectedItems;
      }
      return prevState;
    });
    setItemToRemove(null);
    setShowRemoveItemDialog(false);
  };

  const handleToggle = (item) => {
    const currentIndex = selectedItems.indexOf(item);
    const newSelectedItems = [...selectedItems];

    if (currentIndex === -1) {
      newSelectedItems.push(item);
    } else {
      newSelectedItems.splice(currentIndex, 1);
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <>
      <MuiList style={{ border: "1px solid grey" }}>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Checkbox
                onChange={() => handleToggle(item)}
                checked={selectedItems.includes(item)}
              />
            </ListItemIcon>
            <ListItemText primary={item} />
            <ListItemSecondaryAction>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setItemToRemove(item);
                  setShowRemoveItemDialog(true);
                }}
              >
                Remove
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </MuiList>
      <Dialog
        isOpen={showRemoveItemDialog}
        onClose={() => setShowRemoveItemDialog(false)}
        onConfirm={handleRemoveItem}
        title="Remove Item"
        content={<p>Are you sure you want to remove this item?</p>}
      />
    </>
  );
};

export default List;
