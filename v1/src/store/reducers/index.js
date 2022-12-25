import { combineReducers } from "redux";
import userReducer from "./userReducer";
import todosReducer from "./todoReducer";
import itemsReducer from "./itemReducer";

const rootReducer = combineReducers({
  users: userReducer,
  todos: todosReducer,
  items: itemsReducer,
});

export default rootReducer;
