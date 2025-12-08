import { useFormik } from "formik";
import React from "react"
import { useLoginMutation } from "../services/userApi";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/user/userSlice";

function Login() {
    var [loginFn] = useLoginMutation()
    var dispatch = useDispatch()
    var loginForm = useFormik({
        initialValues:{
            username:"",
            password:"",
        },
        onSubmit: (values) => {
            loginFn(values).then(({ data })=>{
                dispatch(updateUser(data))
            })
        }
    });
  return (
  <div className="px-5">
    <h1>Login</h1>
    <form onSubmit={loginForm.handleSubmit}>
        <input type="text" {...loginForm.getFieldProps("username")} />
        <br />
        <input type="password" {...loginForm.getFieldProps("password")} />
        <br />
        <button type="submit">Login</button>
    </form>
  </div>
  );
}

export default Login;