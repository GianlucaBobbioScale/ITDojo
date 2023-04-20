import React, { useState } from "react";
import {
  List,
  Box
} from "@material-ui/core";
import  useTaskHandler  from "./db";
import { AddTaskButton } from "./components/AddTaskButton";
import { TaskItem } from "./components/TaskItem";
import { SelectedTasksButton } from "./components/SelectedTasksButton";


const TaskList = () => {
  const { tasks, setTasks, removeTask, removeTasks } = useTaskHandler();
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (task) => {
    removeTask(task);
  };

  const handleRemoveTasks = () => {
    removeTasks(selectedTasks);
    setSelectedTasks([]);
  };
  return (
    <Box sx={{width: 500}}>
      <h1>Task Lists</h1>
      <Box mb={2}>
      <List style={{border: '1px solid grey'}}>
        {tasks.map((task, index) => (
          <TaskItem task={task} index={index} onRemoveTask={handleRemoveTask} selectedTasks={selectedTasks} setSelectedTasks={setSelectedTasks} />
        ))}
      </List>
      </Box>
      <AddTaskButton onSubmitTask={handleAddTask} />
      <SelectedTasksButton selectedTasks={selectedTasks} onRemoveTasks={handleRemoveTasks} />
    </Box>
  );
};

export default TaskList;