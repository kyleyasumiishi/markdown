export default function(state = false, action) {
  switch (action.type) {
    case MOUSEDOWN:
      if (action.payload.target.classname === "handler") {
        return true;
      }
      break;
    case MOUSEUP:
      return false;
    default:
      return state;
  }
}
