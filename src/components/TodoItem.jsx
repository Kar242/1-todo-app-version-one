import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <Button variant="text" onClick={() => onDeleteClick(todoName)}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
