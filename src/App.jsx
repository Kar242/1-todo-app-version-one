import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import FormComponent from "./components/TodoForm";
import { getFormData } from "./store/AppStore";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const { name, email, phone, text } = getFormData((state) => state.formData);

  const handleNewItem = (itemName, itemDueDate, itemText) => {
    console.log(
      `New item Added: ${itemName} Date: ${itemDueDate} Name: ${name}`
    );
    const newTodoItems = [
      ...todoItems,
      { name: itemName, date: itemDueDate, myName: name, text: itemText },
    ];

    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <FormComponent />
      {/* <AddTODO onNewItem={handleNewItem} /> */}

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
