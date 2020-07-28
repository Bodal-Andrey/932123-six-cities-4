import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewsRating from "./reviews-rating.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Should ReviewsRating item can  be pressed`, () => {
  const onRatingChange = jest.fn().mockImplementation();

  const reviewsRating = shallow(
      <ReviewsRating
        isFormDisabled={false}
        onRatingChange={() => {}}
        rating={`5`}
      />
  );

  const ratingInput = reviewsRating.find(`.form__rating-input`).at(0);

  ratingInput.simulate(`change`);

  expect(onRatingChange).toHaveBeenCalledTimes(1);
  expect(ratingInput.prop(`checked`)).toEqual(true);
});
