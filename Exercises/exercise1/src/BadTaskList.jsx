import React, { useState } from "react";
import { TextField, Box, Typography } from "@material-ui/core";
import { useTaskHandler } from "./useTaskHandler";
import { DialogElement } from "./DialogElement";
import { ListComponent } from "./ListComponent";

const BadTaskList = () => {
  const { tasks, addTask, removeTasks } = useTaskHandler();
  const [showDialog, setShowDialog] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [singleTaskToRemove, setSingleTaskToRemove] = useState("");

  const selectedTasksHook = { selectedTasks, setSelectedTasks };

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

  const handleRemoveSingleTask = (task) => {
    setSingleTaskToRemove(task.id);
    setShowDialog("deleteTask");
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
      <ListComponent
        tasks={tasks}
        selectedTasksHook={selectedTasksHook}
        mainButtons={mainButtons}
        singleTaskAction={handleRemoveSingleTask}
      />

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
