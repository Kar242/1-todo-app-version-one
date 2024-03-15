import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import FormComponent from "./components/TodoForm";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];

    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <FormComponent onNewItem={handleNewItem} />
      {/* <AddTODO onNewItem={handleNewItem} /> */}

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
