import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Counter from "./features/counter/Counter";
import Products from "./features/products/Products";
import Todolist from "./features/todolist/Todolist";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="border border-primary border-2 m-2 p-2">
      <h1>Welcome to React</h1>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;