import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from './reviews-list.jsx';
import offers from "../../data-test.js";

it(`Test ReviewsList`, () => {
  const tree = renderer.create(
      <ReviewsList
        offer={offers[0]}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
