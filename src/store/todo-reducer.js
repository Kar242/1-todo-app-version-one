import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    todoitem: []
}

export const todoSlice = createSlice({
    name: "todoData",
    initialState,   
    reducers: {
        setTodoItem : (state, action) => {
            state.todoitem = [...state.todoitem,...action.payload]
        },
        deleteTodoItem : (state, action) => {
            state.todoitem = state.todoitem.filter((item) => item.name !== action.payload.todoName)
        }
    }
})


export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;