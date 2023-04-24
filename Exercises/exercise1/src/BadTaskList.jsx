import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  TextField,
  ListItemIcon,
  Checkbox,
  Box,
  Typography,
} from "@material-ui/core";
import { useTaskHandler } from "./useTaskHandler";
import { DialogElement } from "./DialogElement";
import { ButtonArray } from "./ButtonArray";

const BadTaskList = () => {
  const { tasks, addTask, removeTasks } = useTaskHandler();
  const [newTaskName, setNewTaskName] = useState("");
  const [showDialog, setShowDialog] = useState("");
  const [singleTaskToRemove, setSingleTaskToRemove] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleAddTask = () => {
    const added = addTask(newTaskName);
    if (added) {
      setNewTaskName("");
      setShowDialog("");
    } else {
      alert("task already exists");
    }
  };

  const handleRemoveTask = () => {
    removeTasks(singleTaskToRemove);
    setShowDialog("");
  };

  const handleRemoveTasks = () => {
    removeTasks(selectedTasks);
    setSelectedTasks([]);
    setShowDialog("");
  };

  const handleToggle = (task) => {
    const taskId = task.id;
    const currentTaskIsSelected = selectedTasks.includes(taskId);
    const newSelectedTasks = [...selectedTasks];
    if (currentTaskIsSelected) {
      const currentIndex = selectedTasks.findIndex((e) => e === taskId);
      newSelectedTasks.splice(currentIndex, 1);
    } else {
      newSelectedTasks.push(taskId);
    }
    setSelectedTasks(newSelectedTasks);
  };
  const dialogs = {
    addNewTask: {
      title: "Add New Task",
      actions: [
        {
          buttonContent: "Yes",
          actionOnClick: handleAddTask,
          color: "primary",
        },
        {
          buttonContent: "Cancel",
          actionOnClick: () => setShowDialog(""),
          color: "secondary",
        },
      ],
      content: (
        <TextField
          label="Task Name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          fullWidth
        />
      ),
    },
    deleteTask: {
      title: "Remove Selected Task",
      actions: [
        {
          buttonContent: "Yes",
          actionOnClick: handleRemoveTask,
          color: "primary",
        },
        {
          buttonContent: "No",
          actionOnClick: () => setShowDialog(""),
          color: "secondary",
        },
      ],
      content: (
        <Typography>Are you sure you want to remove this task?</Typography>
      ),
    },
    deleteTasks: {
      title: "Remove Selected Tasks",
      actions: [
        {
          buttonContent: "Yes",
          actionOnClick: handleRemoveTasks,
          color: "primary",
        },
        {
          buttonContent: "No",
          actionOnClick: () => setShowDialog(""),
          color: "secondary",
        },
      ],
      content: (
        <Typography>
          Are you sure you want to remove the selected tasks?
        </Typography>
      ),
    },
  };
  const mainButtons = [
    {
      buttonContent: "New Task",
      actionOnClick: () => setShowDialog("addNewTask"),
      color: "primary",
    },
    {
      buttonContent: "Remove Selected Tasks",
      actionOnClick: () => setShowDialog("deleteTasks"),
      color: "secondary",
      disabled: selectedTasks.length === 0,
    },
  ];

  return (
    <Box sx={{ width: 500 }}>
      <h1>Task List</h1>
      <Box mb={2}>
        <List style={{ border: "1px solid grey" }}>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemIcon>
                <Checkbox
                  onChange={() => handleToggle(task)}
                  checked={selectedTasks.includes(task.id)}
                />
              </ListItemIcon>
              <ListItemText primary={task.content} />
              <ListItemSecondaryAction>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    setSingleTaskToRemove(task.id);
                    setShowDialog("deleteTask");
                  }}
                >
                  Remove
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>

      <ButtonArray actions={mainButtons} variant="contained" />

      {!!showDialog ? (
        <DialogElement
          open={!!showDialog}
          onClose={() => setShowDialog("")}
          dialogContent={dialogs[showDialog]}
          key={dialogs[showDialog].title}
        />
      ) : undefined}
    </Box>
  );
};

export default BadTaskList;
