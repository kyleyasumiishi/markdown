import { UPDATE_TEXT } from "../../constants";

export const editMarkdown = event => {
  return {
    type: UPDATE_TEXT,
    payload: event.target.value
  };
};
