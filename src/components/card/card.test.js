import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";
import offers from "../../data-test.js";

it(`Test Card with first offer name`, () => {
  const tree = renderer.create(
      <Card
        offer={offers[0]}
        onCardClick={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
