import { POST_SIGNIN } from "../types";

const initialState = {
  auth_token: localStorage.getItem("auth_token") || null,
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POST_SIGNIN: {
      return {
        ...state,
        access_token: payload,
      };
    }
    default:
      return state;
  }
}
