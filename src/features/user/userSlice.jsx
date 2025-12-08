import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  username: window.localStorage.getItem("username") 
  ? window.localStorage.getItem("username")
  : "",
  token: window.localStorage.getItem("token") 
  ? window.localStorage.getItem("token") 
  : "",
  role: window.localStorage.getItem("role") 
  ? window.localStorage.getItem("role") 
  : "",
};

var userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      window.localStorage.setItem("username", action.payload.username);
      window.localStorage.setItem("token", action.payload.token);
      window.localStorage.setItem("role", action.payload.role);

      state.username = action.payload.username;
      state.token = action.payload.token;
      state.role = action.payload.role;
    }
}
});

export const { updateUser } = userSlice.actions;
var userReducer = userSlice.reducer;
export default userReducer;  