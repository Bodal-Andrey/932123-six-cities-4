import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from './reviews-item.jsx';
import offers from "../../data-test.js";

it(`Test ReviewsItem with first offer`, () => {
  const tree = renderer.create(
      <ReviewsItem
        offer={offers[0]}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
