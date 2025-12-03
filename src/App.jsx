import{ Link ,Outlet } from "react-router-dom"
import "./App.css";

function App() {

  return (
  <div>
    <ul id = 'nav'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/todolist">Todolist</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/recipes">Recipes</Link>
      </li>
    </ul>
    <div className="border border-danger p-3 m-3">
      <Outlet></Outlet>
    </div>
  </div>
  );
}

export default App;
