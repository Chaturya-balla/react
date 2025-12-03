import React from "react";

function Todo({ t }){
    return(
        <div className="border p-2 m-2">
            <li>{t}</li>
        </div>
    );
}

export default Todo;