import React from "react";
import renderer from "react-test-renderer";
import NearbyList from "./nearby-list.jsx";
import offers from "../../data-test.js";

it(`NearbyList component test`, () => {
  const tree = renderer.create(
      <NearbyList
        offers={offers}
        onChangeScreen={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
