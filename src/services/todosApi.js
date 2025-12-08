import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/todos" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => `/getAllTodos`,
    }),
    addNewTodo: builder.mutation({
      query: (ntd) => {
        return {
          url: "/",
          method: "POST",
          body: ntd,
        };
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
  useAddNewTodoMutation,
  useDeleteTodoMutation,
} = todosApi;