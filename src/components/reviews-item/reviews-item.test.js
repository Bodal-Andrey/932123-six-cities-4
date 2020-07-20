import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from './reviews-item.jsx';

const review = {
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  rating: 3,
  name: `Max`,
  date: `December 24, 2018`
};

it(`Test ReviewsItem with first offer`, () => {
  const tree = renderer.create(
      <ReviewsItem
        review={review}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
