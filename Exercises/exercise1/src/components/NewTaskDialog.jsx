import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";

const NewTaskDialog = ({
  showNewTaskDialog,
  setShowNewTaskDialog,
  newTaskName,
  setNewTaskName,
  handleAddTask,
}) => {
  return (
    <Dialog
      open={showNewTaskDialog}
      onClose={() => setShowNewTaskDialog(false)}
    >
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Task Name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddTask} color="primary">
          Add Task
        </Button>
        <Button onClick={() => setShowNewTaskDialog(false)} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTaskDialog;
