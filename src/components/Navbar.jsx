import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
function Navbar() {
  var user = useSelector((state) => state.userR);
  console.log(user);
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
         <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <b>Hi,{user?.username}</b>
      </ul>
    </div>
  );
}

export default Navbar;