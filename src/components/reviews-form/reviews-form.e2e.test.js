import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewsForm from "./reviews-form.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Test ReviewsForm component`, () => {
  const onPostReview = jest.fn().mockImplementation(() => Promise.resolve(`value`));

  const reviewsForm = shallow(
      <ReviewsForm
        offerId={1}
        onPostReview={onPostReview}
      />
  );

  const reviewsFormForSubmit = reviewsForm.find(`.reviews__form`);

  reviewsFormForSubmit.simulate(`submit`, {
    preventDefault: () => {}
  });

  expect(onPostReview).toHaveBeenCalledTimes(1);
});
