import { combineReducers } from "redux";
import HandlerReducer from "./handlerReducer";

const allReducers = combineReducers({
  isHandlerDragging: HandlerReducer
});

export default allReducers;
