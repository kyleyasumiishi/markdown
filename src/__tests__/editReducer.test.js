import editReducer from "../js/reducers/editReducer";
import { UPDATE_TEXT } from "../constants";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("editReducer", () => {
  it("sets state to a string when action.type is UPDATE_TEXT", () => {
    const beforeState = "";
    const action = {
      type: UPDATE_TEXT,
      payload: "Hello world"
    };
    const afterState = editReducer(beforeState, action);
    expect(typeof afterState).toEqual("string");
    expect(afterState).toEqual("Hello world");
  });
  it("sets state to the payload string", () => {
    const beforeState = "";
    const action = {
      type: UPDATE_TEXT,
      payload: "Hello world"
    };
    const afterState = editReducer(beforeState, action);
    expect(afterState).toEqual("Hello world");
  });
});
