import { UPDATE_OPTION } from "../../constants";

export const handleOptionSelect = event => {
  return {
    type: UPDATE_OPTION,
    payload: event.target.id
  };
};
