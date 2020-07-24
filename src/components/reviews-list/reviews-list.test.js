import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from './reviews-list.jsx';
import {reviews} from "../../data-test.js";

it(`Test ReviewsList`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviews}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
