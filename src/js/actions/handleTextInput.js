import { UPDATE_TEXT } from "../../constants";

export const handleTextInput = event => {
  return {
    type: UPDATE_TEXT,
    payload: event.target.value
  };
};
