import { UPDATE_OPTION } from "../../constants";

export const selectOption = event => {
  return {
    type: UPDATE_OPTION,
    payload: event.target.id
  };
};
