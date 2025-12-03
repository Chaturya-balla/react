import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./Counter.jsx";
import Todolist from "./Todolist.jsx";
import Home from "./Home.jsx";
import Gallery from "./Gallery.jsx";
import Products from "./Products.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Recipes from "./Recipes.jsx";
import RecipeDetails from "./RecipeDetails.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/counter",
            element:<Counter></Counter>,
        },
        {
            path:"/todolist",
            element:<Todolist></Todolist>,
        },
        {
          path:"/gallery",
          element:<Gallery></Gallery>,
        },
        {
          path:"/products",
          element:<Products></Products>,
        },
        {
            path: "/products/:id",
            element: <ProductDetails></ProductDetails>,
        },
        {
          path:"/recipes",
          element:<Recipes></Recipes>,
          children:[
            {
            path:"/recipes/:id",
            element: <RecipeDetails></RecipeDetails>,
            },
          ],
        },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
   <RouterProvider router={router} />
);
