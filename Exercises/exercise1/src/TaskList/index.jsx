import React, { useMemo, useState } from "react";
import { Box } from "@material-ui/core";
import List from "./components/List";
import Actions from "./components/Actions";

// This works as a kind of DB
const useTaskHandler = () => {
  const [tasks, setTasksState] = useState([]);

  const setTasks = (tasks) => {
    setTasksState(tasks);
  };

  const removeTask = (taskToRemove) => {
    setTasksState(tasks.filter((task) => task !== taskToRemove));
  };

  const removeTasks = (tasksToRemove) => {
    setTasksState(tasks.filter((task) => !tasksToRemove.includes(task)));
  };

  return { tasks, setTasks, removeTask, removeTasks };
};

const TaskList = () => {
  const { tasks, setTasks, removeTask, removeTasks } = useTaskHandler();
  const [newTaskName, setNewTaskName] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);

  const isTaskDuplicated = useMemo(
    () => tasks.includes(newTaskName),
    [tasks, newTaskName]
  );

  const handleAddTask = () => {
    setTasks([...tasks, newTaskName]);
    setNewTaskName("");
  };

  const handleRemoveTasks = () => {
    removeTasks(selectedTasks);
    setSelectedTasks([]);
  };

  return (
    <Box sx={{ width: 500 }}>
      <h1>Task List</h1>
      <Box mb={2}>
        <List
          items={tasks}
          selectedItems={selectedTasks}
          setSelectedItems={setSelectedTasks}
          removeItem={removeTask}
        />
      </Box>
      <Actions
        createLabel="New Task"
        removeLabel="Remove Selected Tasks"
        onCreate={handleAddTask}
        onRemove={handleRemoveTasks}
        isRemoveDisabled={selectedTasks.length === 0}
        newItemName={newTaskName}
        setNewItemName={setNewTaskName}
        isItemDuplicated={isTaskDuplicated}
      />
    </Box>
  );
};

export default TaskList;
