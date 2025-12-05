import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    todos:['plan trip','book tickets','practice coding']
}

export const todolistSlice = createSlice({
    name:"todolist",
    initialState,
    reducers:{
         addTodo:(state,action) => {
            state.todos.push(action.payload)
         },
    },
})

export const {addTodo} = todolistSlice.actions
const todoReducer = todolistSlice.reducer;
export default todoReducer