import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/todos" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => {
        return {
          url:`/getAllTodos`,
          method: "GET",
          headers:{
            token:window.localStorage.getItem("token")
          }
        }
      }
    }),

    getTodosByUserName: builder.query({
      query: (username) => {
        return {
          url:`/getTodosByUserName/${username}`,
          method: "GET",
          headers:{
            token:window.localStorage.getItem("token")
          }
        }
      }
    }),

    addNewTodo: builder.mutation({
      query: (ntd) => {
        return {
          url: "/addNewTodo",
          method: "POST",
          headers:{
            token:window.localStorage.getItem("token")
          },
          body: ntd,
        };
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/deleteTodo/${id}`,
          method: "DELETE",
          headers:{
            token:window.localStorage.getItem("token")
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useGetTodosByUserNameQuery,
  useLazyGetTodosByUserNameQuery,
  useLazyGetAllTodosQuery,
  useAddNewTodoMutation,
  useDeleteTodoMutation,
} = todosApi;