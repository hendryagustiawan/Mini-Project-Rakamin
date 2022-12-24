import axios from "axios";
import { POST_SIGNIN } from "../types";

export const signIn = (data) => (dispatch, getState) => {
  return axios
    .post("https://todo-api-18-140-52-65.rakamin.com/auth/login", data)
    .then(({ data }) => {
      localStorage.setItem("auth_token", data.auth_token);
      dispatch({
        type: POST_SIGNIN,
        payload: data.payload,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
