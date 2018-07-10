import React from "react";
import Panel from "../js/components/Panel";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("PanelContainer", () => {
  describe("rendered handler div", () => {
    it("should execute handleMouseDown", () => {
      const handleMouseDown = jest.fn();
      const wrapper = shallow(<Panel mousedown={handleMouseDown} />);
      wrapper.find(".handler").simulate("mousedown");
      expect(handleMouseDown).toHaveBeenCalledTimes(1);
    });
  });
  describe("rendered container div", () => {
    it("should execute handleMouseMove", () => {
      const handleMouseMove = jest.fn();
      const wrapper = shallow(<Panel mousemove={handleMouseMove} />);
      wrapper.find(".container").simulate("mousemove");
      expect(handleMouseMove).toHaveBeenCalledTimes(1);
    });
    it("should execute handleMouseUp", () => {
      const handleMouseUp = jest.fn();
      const wrapper = shallow(<Panel mouseup={handleMouseUp} />);
      wrapper.find(".container").simulate("mouseup");
      expect(handleMouseUp).toHaveBeenCalledTimes(1);
    });
  });
  describe("rendered previewer div", () => {
    it("should execute handleTextInput", () => {
      const handleTextInput = jest.fn();
      const wrapper = shallow(<Panel onchange={handleTextInput} />);
      wrapper.find(".editor-text").simulate("change");
      expect(handleTextInput).toHaveBeenCalledTimes(1);
    });
  });
});
