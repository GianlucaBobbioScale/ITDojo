import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
} from "@material-ui/core";

const RemoveTaskDialog = ({
  showRemoveTaskDialog,
  setShowRemoveTaskDialog,
  handleRemoveTask,
  showRemoveTasksDialog,
  setShowRemoveTasksDialog,
  handleRemoveTasks,
}) => {
  return (
    <>
      <Dialog
        open={showRemoveTaskDialog}
        onClose={() => setShowRemoveTaskDialog(false)}
      >
        <DialogTitle>Remove Task</DialogTitle>
        <DialogContent>
          <Box component="p">Are you sure you want to remove this task?</Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveTask} color="primary">
            Yes
          </Button>
          <Button
            onClick={() => setShowRemoveTaskDialog(false)}
            color="secondary"
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={showRemoveTasksDialog}
        onClose={() => setShowRemoveTasksDialog(false)}
      >
        <DialogTitle>Remove Selected Tasks</DialogTitle>
        <DialogContent>
          <Box component="p">Are you sure you want to remove the selected tasks?</Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveTasks} color="primary">
            Yes
          </Button>
          <Button
            onClick={() => setShowRemoveTasksDialog(false)}
            color="secondary"
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RemoveTaskDialog;
