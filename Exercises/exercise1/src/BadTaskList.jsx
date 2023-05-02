import React, { useContext, useState } from 'react';
import { List, Box } from '@material-ui/core';

import Task from './Task';
import ListActions from './components/ListActions';
import { TasksContext } from './contexts/tasksProvider';

const BadTaskList = () => {
  const { tasks } = useContext(TasksContext);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleToggle = (task) => {
    const currentIndex = selectedTasks.indexOf(task);
    const newSelectedTasks = [...selectedTasks];

    if (currentIndex === -1) {
      newSelectedTasks.push(task);
    } else {
      newSelectedTasks.splice(currentIndex, 1);
    }

    setSelectedTasks(newSelectedTasks);
  };

  return (
    <Box sx={{ width: 500 }}>
      <h1>Task List</h1>
      <Box mb={2}>
        <List style={{ border: '1px solid grey' }}>
          {tasks.map((task, index) => (
            <Task
              key={index}
              {...{
                task,
                selectedTasks,
                handleToggle,
              }}
            />
          ))}
        </List>
      </Box>

      <ListActions />
    </Box>
  );
};

export default BadTaskList;
