const MOUSEDOWN = "MOUSEDOWN";
const MOUSEMOVE = "MOUSEMOVE";
const MOUSEUP = "MOUSEUP";

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
