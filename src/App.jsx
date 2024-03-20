import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import FormComponent from "./components/TodoForm";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/todo" element={<TodoItems />} />
      </Routes>
    </center>
  );
}

export default App;
