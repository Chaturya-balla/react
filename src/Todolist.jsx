import React, { useState } from "react";
import Todo from "./Todo";

function Todolist(){
    var [todos, setTodos] = useState(["Trip to Kerala", "watch pickleball"]);
    function addNewTodo(){
        //get the value from textbox
        var ntodo = document.getElementById("d1").value;
        //insert the value into state variable
        setTodos([...todos, ntodo]);
    }

    return(
        <div className="border border-success p-2 m-2">
            <h1>Todolist</h1>
            <input type="text" id="d1" />
            <button 
            onClick={() => {
                addNewTodo();
            }}
            >
                Add Todo
            </button>
            <ul className="list-unstyled">
                {todos.map((t) => {
                    return <Todo t={t}></Todo>;
                })}
            </ul>
        </div>
    );
}

export default Todolist;