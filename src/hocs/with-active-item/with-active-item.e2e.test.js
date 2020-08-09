import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import withActiveItem from "./with-active-item.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should ActiveItem change`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().activeItemId).toEqual(null);

  wrapper.props().onActiveItemChange(2);
  expect(wrapper.props().activeItemId).toEqual(2);

  wrapper.props().onActiveItemChange(3);
  expect(wrapper.props().activeItemId).toEqual(3);
});
