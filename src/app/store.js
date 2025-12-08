import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todolistSlice";
import { productsApi } from "../services/products";
import { pokemonApi } from "../services/pokemon";
import { imdbApi } from "../services/imdb";
import { todosApi } from "../services/todosApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../services/userApi";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    cntR: counterReducer,
    todolistR: todoReducer,
    userR: userReducer,
  
    [productsApi.reducerPath]: productsApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [imdbApi.reducerPath]: imdbApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      pokemonApi.middleware,
      imdbApi.middleware,
       todosApi.middleware,
       userApi.middleware
    ),
});
setupListeners(store.dispatch);