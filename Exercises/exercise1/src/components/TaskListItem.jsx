import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";

const TaskListItem = ({
  task,
  index,
  handleToggle,
  setTaskToRemove,
  selectedTasks,
  setShowRemoveTaskDialog,
}) => {
  return (
    <ListItem key={index}>
      <ListItemIcon>
        <Checkbox
          onChange={() => handleToggle(task)}
          checked={selectedTasks.includes(task)}
        />
      </ListItemIcon>
      <ListItemText primary={task} />
      <ListItemSecondaryAction>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setTaskToRemove(task);
            setShowRemoveTaskDialog(true);
          }}
        >
          Remove
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskListItem;
