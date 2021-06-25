import axios from "axios";
import jwt from 'jsonwebtoken'

export function loading() {
  return { type: "USER_STATUS_LOADING" };
}
export function failed() {
  return { type: "USER_STATUS_FAILED" };
}
export function idle() {
  return { type: "USER_STATUS_IDLE" };
}
export function setUser(user) {
  return { type: "SET_USER", payload: user };
}

export function signUp(user) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const { data } = await axios.post("/users/signUp", user);
      console.log(data)
      dispatch(idle());
    } catch (error) {
      dispatch(failed());
      console.error(error);
    }
  };
}

export function logIn(input) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const { data } = await axios.post("users/login", input)
      console.log(data)
      window.localStorage.setItem("token", data);
      const user = jwt.decode(data);
      dispatch(setUser(user));
    } catch (err){
      dispatch(failed());
      console.log(err);
    }
  }
}


export function logOut() {
  return async (dispatch) => {
    dispatch(loading());
    try {
      dispatch(setUser(null));
      localStorage.removeItem("token");
    } catch (err) {
      dispatch(failed());
      console.error(err);
    }
  };
}



export function getAllUsers() {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const { data } = await axios.get(`/users/allUsers`);
      dispatch({ type: "GET_ALL_USERS", payload: data });
    } catch (error) {
      console.log(error);
      dispatch(failed());
    }
  };
}