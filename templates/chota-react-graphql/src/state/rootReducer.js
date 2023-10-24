import { combineReducers } from "redux";
import todo from "./todo/todo.reducer";
import filters from "./filters/filters.reducer";

export default combineReducers({
  todo,
  filters,
});
