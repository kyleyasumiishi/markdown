import { UPDATE_TEXT, UPDATE_OPTION } from "../../constants";

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return action.payload;
    case UPDATE_OPTION:
      switch (action.payload) {
        case "markdown-reference":
          return "markdown";
        case "git-cheat-sheet":
          return "git";
        case "readme-template":
          return "readme-template";
        case "project-readme":
          return "project-readme";
        default:
          return state;
      }
    default:
      return state;
  }
}
