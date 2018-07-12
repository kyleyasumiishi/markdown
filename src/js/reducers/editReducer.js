import { UPDATE_TEXT, UPDATE_OPTION, CLEAR } from "../../constants";
import { GIT_CHEAT_SHEET } from "../../options/git-cheat-sheet";
import { MARKDOWN_REFERENCE } from "../../options/markdown-reference";
import { README_TEMPLATE } from "../../options/readme-template";

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return action.payload;
    case UPDATE_OPTION:
      switch (action.payload) {
        case "markdown-reference":
          return MARKDOWN_REFERENCE;
        case "git-cheat-sheet":
          return GIT_CHEAT_SHEET;
        case "readme-template":
          return README_TEMPLATE;
        case "project-readme":
          return "project-readme";
        default:
          return state;
      }
    case CLEAR:
      return "";
    default:
      return state;
  }
}
