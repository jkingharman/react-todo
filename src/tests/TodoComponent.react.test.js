import React from "react";

import { configure } from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoContainer from "../TodoComponent.js";

configure({ adapter: new Adapter() });

it("allows the user to create todos",() => {

});
