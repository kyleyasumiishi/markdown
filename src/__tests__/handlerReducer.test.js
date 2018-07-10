import React from "react";
import handlerReducer from "../js/reducers/handlerReducer";
import { MOUSEDOWN, MOUSEUP } from "../constants";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("handlerReducer", () => {
  it("sets isHandlerDragging state to true when action.type is MOUSEDOWN", () => {
    const beforeState = false;
    const action = {
      type: MOUSEDOWN
    };
    const afterState = handlerReducer(beforeState, action);
    expect(afterState).toBeTruthy();
  });
  it("sets isHandlerDragging state to false when action.type is MOUSEUP", () => {
    const beforeState = true;
    const action = {
      type: MOUSEUP
    };
    const afterState = handlerReducer(beforeState, action);
    expect(afterState).not.toBeTruthy();
  });
  it("sets isHandlerDragging to false by default", () => {
    const beforeState = false;
    const action = {
      type: "IRRELEVANT"
    };
    const afterState = handlerReducer(beforeState, action);
    expect(afterState).not.toBeTruthy();
  });
});
