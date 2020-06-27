import React from "react";
import renderer from "react-test-renderer";
import NearbyCard from "./nearby-card.jsx";
import offers from "../../data-test.js";

it(`Test NearbyCard with first offer name`, () => {
  const tree = renderer.create(
      <NearbyCard
        offer={offers[0]}
        onChangeScreen={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
