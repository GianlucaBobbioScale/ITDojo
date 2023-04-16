import { Button } from "@material-ui/core";

const ButtonList = ({
  selectedTasks,
  setShowNewTaskDialog,
  setShowRemoveTasksDialog,
}) => {
  return (
    <>
      <Button
        style={{ marginRight: 8 }}
        variant="contained"
        color="primary"
        onClick={() => setShowNewTaskDialog(true)}
      >
        New Task
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setShowRemoveTasksDialog(true)}
        disabled={selectedTasks.length === 0}
      >
        Remove Selected Tasks
      </Button>
    </>
  );
};

export default ButtonList;
