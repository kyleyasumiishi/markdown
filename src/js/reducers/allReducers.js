import { combineReducers } from "redux";
import dragReducer from "./dragReducer";
import editReducer from "./editReducer";

const allReducers = combineReducers({
  isHandlerDragging: dragReducer,
  markdown: editReducer
});

export default allReducers;
