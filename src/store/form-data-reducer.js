import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    phone: '',
    text: ''
}

export const formSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload.name
        },
        setEmail: (state, action) => {
            state.email = action.payload.email
        },
        setPhone: (state, action) => {
            state.phone = action.payload.phone
        },
        setText: (state, action) => {
            state.text = action.payload.text
        },
        resetForm: (state) => {
            state.name = '';
            state.email = '';
            state.phone = '';
            state.text = '';
        }
    }
})

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;