import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import FormComponent from "./components/TodoForm";

function App() {

  return (
    <center className="todo-container">
      <AppName />
      <FormComponent />
      <TodoItems />
    </center>
  );
}

export default App;
