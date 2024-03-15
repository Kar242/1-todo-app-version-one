import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            todoName={items.name}
            todoDate={items.date}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
