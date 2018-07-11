import { UPDATE_TEXT } from "../../constants";

export const edit = event => {
  return {
    type: UPDATE_TEXT,
    payload: event.target.value
  };
};
