import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./form-data-reducer";
import { useSelector } from "react-redux";
import { todoReducer } from "./Todo-Reducer";

const rootReducer = combineReducers({
  formData: formReducer,  todoData: todoReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export const getFormData = useSelector;
