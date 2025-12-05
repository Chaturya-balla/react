import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todolistSlice";
import { productsApi } from "../services/products";
import { pokemonApi } from "../services/pokemon";
import { imdbApi } from "../services/imdb";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    cntR: counterReducer,
    todolistR: todoReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [imdbApi.reducerPath]: imdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      pokemonApi.middleware,
      imdbApi.middleware
    ),
});
setupListeners(store.dispatch);