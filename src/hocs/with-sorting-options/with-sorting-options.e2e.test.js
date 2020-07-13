import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSortingOptions from "./with-sorting-options.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withSortingOptions(MockComponent);

it(`Test menu, menu click and menu exit`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().isOpen).toEqual(false);

  wrapper.props().onMenuClick();
  expect(wrapper.props().isOpen).toEqual(true);

  wrapper.props().onMenuExit();
  expect(wrapper.props().isOpen).toEqual(false);
});
