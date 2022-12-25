import axios from "axios";
import { GET_ITEMS } from "../types";

export const getItems = (id) => (dispatch, getState) => {
  axios
    .get(`https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items`, {
      headers: { Authorization: `Bearer ${getState().users.auth_token}` },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_ITEMS,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createItems = (id, data) => (dispatch, getState) => {
  axios
    .post(`https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items`, data, {
      headers: { Authorization: `Bearer ${getState().users.auth_token}` },
    })
    .then(() => {
      dispatch(getItems());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteItems = (id, todoId) => (dispatch, getState) => {
  axios
    .delete(`https://todo-api-18-140-52-65.rakamin.com/todos/${todoId}/items/${id}`, {
      headers: { Authorization: `Bearer ${getState().users.auth_token}` },
    })
    .then(() => {
      dispatch(getItems());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editItems = (id, todoId, data) => (dispatch, getState) => {
  return axios
    .patch(`https://todo-api-18-140-52-65.rakamin.com/todos/${todoId}/items/${id}`, data, {
      headers: { Authorization: `Bearer ${getState().users.auth_token}` },
    })
    .then(() => {
      dispatch(getItems());
    })
    .catch((err) => {
      console.log(err);
    });
};
