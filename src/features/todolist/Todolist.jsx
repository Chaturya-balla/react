import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todolistSlice";

function Todolist(){
    var { todos } = useSelector((state) => state.todolistR);
    var [ntd, setNtd] = useState("");
    var dispatch = useDispatch();

    return(
        <div className="border border-info border-2 m-2 p-2">
            <h1>Todolist</h1>
            <input 
              type="text"
              onChange={(e) => {
                setNtd(e.target.value);
              }}
            />
            <button
            onClick={() => {
                dispatch(addTodo(ntd));
            }}>
                Add New Todo
            </button>
            <ul>
                {todos?.map((t) => {
                    return <li>{t}</li>
                })}
            </ul>
        </div>
        
    )
}

export default Todolist;