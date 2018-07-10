import { MOUSEDOWN, MOUSEUP } from "../../constants";

export default function(state = false, action) {
  switch (action.type) {
    case MOUSEDOWN:
      return true;
    case MOUSEUP:
      return false;
    default:
      return state;
  }
}
