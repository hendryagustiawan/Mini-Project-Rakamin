import axios from "axios";
import { GET_TODOS } from "../types";

export const getTodos = () => (dispatch, getState) => {
  axios
    .get("https://todo-api-18-140-52-65.rakamin.com/todos", {
      headers: { Authorization: `Bearer ${getState().users.auth_token}` },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_TODOS,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createTodos = (data) => (dispatch, getState) => {
  axios
    .post(`https://todo-api-18-140-52-65.rakamin.com/todos`, data, {
      headers: { Authorization: `Bearer ${getState().users.auth_token}` },
    })
    .then(() => {
      dispatch(getTodos());
    })
    .catch((err) => {
      console.log(err);
    });
};
