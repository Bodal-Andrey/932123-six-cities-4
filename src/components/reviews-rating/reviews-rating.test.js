import React from "react";
import renderer from "react-test-renderer";
import ReviewsRating from "./reviews-rating.jsx";

it(`Render ReviewsRating`, () => {
  const tree = renderer
    .create(
        <ReviewsRating
          onChange={() => {}}
          rating={`5`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
