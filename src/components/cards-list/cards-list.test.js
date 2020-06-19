import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";
import offers from "../../data-test.js";

it(`CardsList component test`, () => {
  const tree = renderer.create(
      <CardsList offers={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});

