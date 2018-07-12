import { UPDATE_THEME } from "../../constants";

export const selectTheme = event => {
  return {
    type: UPDATE_THEME,
    payload: event.target.id
  };
};
