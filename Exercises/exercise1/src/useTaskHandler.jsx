import { useState } from "react";

// This works as a kind of DB
export const useTaskHandler = () => {
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
