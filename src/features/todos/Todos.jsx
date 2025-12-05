import React, { useState } from "react";
import {
  useAddNewTodoMutation,
  useDeleteTodoMutation,
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
} from "../../services/todosApi";

function Todos() {
  var { isLoading, data } = useGetAllTodosQuery();
  var [addNewTodoFn] = useAddNewTodoMutation();
  var [deleteTodoFn] = useDeleteTodoMutation();
  var [getLatestTodosFn] = useLazyGetAllTodosQuery();
  var [ntd, setNtd] = useState("");
  console.log(data);
  function addNewTodo() {
    addNewTodoFn({
      title: ntd,
      status: "notcompleted",
    }).then(() => {
      getLatestTodosFn();
    });
  }
  return (
    <div>
      <h1>Todos</h1>
      <input type="text" onChange={(e) => setNtd(e.target.value)} />
      <button
        onClick={() => {
          addNewTodo();
        }}
      >
        Add New Todo
      </button>
      {isLoading && <h4>Loading....</h4>}
      {!isLoading && (
        <ul>
          {data?.map((todo) => {
            return (
              <li>
                {todo.title}
                <button
                  onClick={() => {
                    deleteTodoFn(todo.id).then(() => getLatestTodosFn());
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Todos;

/*using fetch request*/

// fetch("http://localhost:3000/todos", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: ntd,
//     status: "notcompleted",
//   }),
// }).then((res) => console.log(res));