import React from "react";
import Header from "../js/components/Header";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Header", () => {
  describe("Options dropdown content", () => {
    it("should execute onSelectOption", () => {
      const handleSelectOption = jest.fn();
      const wrapper = shallow(<Header selectOption={handleSelectOption} />);
      wrapper.find("#markdown-reference").simulate("click");
      wrapper.find("#git-cheat-sheet").simulate("click");
      wrapper.find("#readme-template").simulate("click");
      wrapper.find("#project-readme").simulate("click");
      expect(handleSelectOption).toHaveBeenCalledTimes(4);
    });
  });
  describe("Clear button", () => {
    it("should execute clearEditor", () => {
      const clearEditor = jest.fn();
      const wrapper = shallow(<Header clearEditor={clearEditor} />);
      wrapper.find(".clear-btn").simulate("click");
      expect(clearEditor).toHaveBeenCalledTimes(1);
    });
  });
  describe("Themes dropdown content", () => {
    it("should execute changeTheme", () => {
      const changeTheme = jest.fn();
      const wrapper = shallow(<Header selectTheme={changeTheme} />);
      wrapper.find("#default").simulate("click");
      wrapper.find("#space").simulate("click");
      wrapper.find("#dogs").simulate("click");
      wrapper.find("#retro").simulate("click");
      expect(changeTheme).toHaveBeenCalledTimes(4);
    });
  });
});
