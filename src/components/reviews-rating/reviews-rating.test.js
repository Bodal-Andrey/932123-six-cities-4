import React from "react";
import renderer from "react-test-renderer";
import ReviewsRating from "./reviews-rating.jsx";

it(`Render ReviewsRating`, () => {
  const onChange = jest.fn();

  const tree = renderer
    .create(
        <ReviewsRating
          onChange={onChange}
          rating={`5`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
