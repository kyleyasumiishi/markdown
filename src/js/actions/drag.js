import { MOUSEDOWN, MOUSEUP } from "../../constants";

export const handleMouseDown = event => {
  return {
    type: MOUSEDOWN,
    payload: event
  };
};

export const handleMouseUp = () => {
  return {
    type: MOUSEUP
  };
};
