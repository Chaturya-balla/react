import React from "react";
import { Link, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul className="list-unstyled d-flex" style={{ gap: "20px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">counter</Link>
        </li>
        <li>
          <Link to="/todolist">todolist</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/imdb">Imdb</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;