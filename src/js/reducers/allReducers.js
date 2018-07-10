import { combineReducers } from "redux";
import HandlerReducer from "./handlerReducer";
import HandleTextInputReducer from "./handleTextInputReducer";

const allReducers = combineReducers({
  isHandlerDragging: HandlerReducer,
  textInput: HandleTextInputReducer
});

export default allReducers;
