import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/Todo-Reducer";

function TodoItem({ name, email, phone, text }) {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="name change">Name:{name}</div>
        <div className="email change">Email:{email}</div>
        <div className="phone change">Phone:{phone}</div>
        <div className="text change">Note:{text}</div>

        <div className="col-2">
          <Button
            variant="text"
            onClick={() =>
              dispatch(todoActions.deleteTodoItem({ todoName: name }))
            }
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
