import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    counter:0
}

export const counterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter++
        },
        decrement:(state)=>{
            state.counter--
        },
        reset:(state)=>{
            state.counter=initialState.counter
        }
    }
})

export var {increment,decrement,reset} = counterSlice.actions

const counterReducer = counterSlice.reducer;
export default counterReducer;