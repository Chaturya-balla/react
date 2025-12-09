import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { updateUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  var navigateFn = useNavigate()
  var user = useSelector((state) => state.userR);
  var dispatch = useDispatch();
  console.log(user);
  function logout(){
    window.localStorage.clear();
    dispatch(updateUser({}));
    navigateFn("/")
  }
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
         {user.username && (
          <li>
          <Link to="/todos">Todos</Link>
        </li>
         )}
        {!user.username && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user.username && (
          <>
          <li>
            <button
               className="btn btn-danger btn-sm"
               onClick={() => {
                logout();
               }}
            > 
              Logout
            </button>
          </li>
          <b>Hi,{user?.username}</b>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;