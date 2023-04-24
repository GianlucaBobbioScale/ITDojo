import { useState } from "react";

// This works as a kind of DB
const useTaskHandler = () => {
  const [tasks, setTasksState] = useState([]);
  
  const addNewTask = (newTask) => {
    setTasksState([...tasks, newTask]);
  };

  const removeTask = (taskToRemove) => {
    setTasksState(tasks.filter((task) => task !== taskToRemove));
  };

  const removeTasks = (tasksToRemove) => {
    setTasksState(tasks.filter((task) => !tasksToRemove.includes(task)));
  };

  return { tasks, addNewTask, removeTask, removeTasks };
};

export default useTaskHandler;
