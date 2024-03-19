import { getFormData } from "../store/AppStore";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const todoData = getFormData((state) => state.todoData.todoitem);
  return (
    <>
      <div className="items-container">
        {todoData?.map((item, index) => (
          <TodoItem
            key={`${item.name}-${index}`}
            name={item.name}
            email={item.email}
            phone={item.phone}
            text={item.text}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
