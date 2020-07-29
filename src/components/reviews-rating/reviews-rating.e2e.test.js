import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewsRating from "./reviews-rating.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Should ReviewsRating item can  be pressed`, () => {
  const onChange = jest.fn().mockImplementation();

  const reviewsRating = shallow(
      <ReviewsRating
        onChange={() => {}}
        rating={`5`}
      />
  );

  const ratingInput = reviewsRating.find(`.form__rating-input`).at(0);

  const event = {
    target: {
      value: `This is just for test`
    }
  };

  ratingInput.simulate(`change`, event);

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith({target: {value: `This is just for test`}}, `This is just for test`);
});
