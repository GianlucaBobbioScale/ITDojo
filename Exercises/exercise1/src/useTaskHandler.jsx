import { useState } from "react";

// This works as a kind of DB
export const useTaskHandler = () => {
  const [tasks, setTasksState] = useState([]);

  const addTask = (payload) => {
    const taskExists = tasks.find((e) => e.content === payload);
    if (!taskExists) {
      const newTask = {
        id: new Date().toISOString(),
        content: payload,
      };
      setTasksState([...tasks, newTask]);
      return true;
    } else {
      return false;
    }
  };

  const removeTasks = (tasksToRemove) => {
    setTasksState(
      tasks.filter(
        (task) =>
          !(
            Array.isArray(tasksToRemove) ? tasksToRemove : [tasksToRemove]
          ).includes(task.id)
      )
    );
  };

  return { tasks, addTask, removeTasks };
};
