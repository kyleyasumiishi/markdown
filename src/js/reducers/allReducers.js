import { combineReducers } from "redux";
import dragReducer from "./dragReducer";
import editReducer from "./editReducer";

const allReducers = combineReducers({
  isHandlerDragging: dragReducer,
  input: editReducer
});

export default allReducers;
