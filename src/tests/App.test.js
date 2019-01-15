import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { mount, shallow, render } from "enzyme";

it("should render correctly with no props", () => {
  const component = shallow(<App />);

  expect(component).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(<App />);
});

it("should render banner text correctly with given strings", () => {
  const strings = ["one", "two"];
  const component = shallow(<MyComponent items={strings} />);
  expect(component).toMatchSnapshot();
});
