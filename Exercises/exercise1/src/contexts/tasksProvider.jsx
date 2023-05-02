import { useState, createContext } from 'react';

// This works as a kind of DB
const useTaskHandler = () => {
  const [tasks, setTasksState] = useState([]);

  const setTasks = (tasks) => {
    setTasksState(tasks);
  };

  const addTask = (task) => {
    setTasksState([...tasks, task]);
  };

  const removeTasks = (tasksToRemove) => {
    setTasksState(tasks.filter((task) => !tasksToRemove.includes(task)));
  };

  return { tasks, setTasks, removeTasks, addTask };
};

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const tasksHandler = useTaskHandler();

  return (
    <TasksContext.Provider value={tasksHandler}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
