import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from './reviews-list.jsx';
import offers from "../../data-test.js";

it(`Test ReviewsList`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={offers[0].reviews}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
