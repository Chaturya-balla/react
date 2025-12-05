import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./features/counter/Counter.jsx";
import Home from "./features/home/Home.jsx";
import Todolist from "./features/todolist/Todolist.jsx";
import Products from "./features/products/Products.jsx";
import Imdb from "./features/imdb/Imdb.jsx";
import ShowDetails from "./features/imdb/ShowDetails.jsx";
import CrewDetails from "./features/imdb/CrewDetails.jsx";
import Todos from "./features/todos/Todos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/todolist",
        element: <Todolist></Todolist>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/imdb",
        element: <Imdb></Imdb>,
      },
      {
        path: "/showDetails/:id",
        element: <ShowDetails></ShowDetails>,
      },
      {
        path: "/crewDetails/:nid",
        element: <CrewDetails></CrewDetails>,
      },
       {
        path: "/todos",
        element: <Todos></Todos>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);