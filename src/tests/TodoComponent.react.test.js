import React from "react";

import { configure } from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoContainer from "../TodoContainer.js";

configure({ adapter: new Adapter() });

it("allows the user to create a todo", () => {
  const component = mount(<TodoContainer />);
  component.find("#create-btn svg").simulate("click");
  component
    .find("#note-input")
    .simulate("change", { target: { value: "note" } });
  component
    .find("#title-input")
    .simulate("change", { target: { value: "title" } });
  component.find("AddIcon svg").simulate("click");

  expect(component.find(".Todo h4").text()).toEqual("title");
  expect(component.find(".Todo p").text()).toEqual("note");
});

it("allows a user to delete a todo", () => {
  const component = mount(<TodoContainer />);

  component.find("#create-btn svg").simulate("click");
  component
    .find("#note-input")
    .simulate("change", { target: { value: "note" } });
  component
    .find("#title-input")
    .simulate("change", { target: { value: "title" } });
  component.find("AddIcon svg").simulate("click");
  component.find("DeleteIcon svg").simulate("click");

  expect(component.find(".Todo").exists()).toBe(false);
});

it("prevents a user from creating incomplete todos", () => {
  const component = mount(<TodoContainer />);
  component.find("#create-btn svg").simulate("click");
  component
    .find("#note-input")
    .simulate("change", { target: { value: "note" } });
  component.find("AddIcon svg").simulate("click");

  expect(component.find(".Flash").prop("style")).toEqual({ display: "block" });
});
