import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from './reviews-item.jsx';
import {reviews} from "../../data-test.js";

it(`Test ReviewsItem with first offer`, () => {
  const tree = renderer.create(
      <ReviewsItem
        review={reviews[0]}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
