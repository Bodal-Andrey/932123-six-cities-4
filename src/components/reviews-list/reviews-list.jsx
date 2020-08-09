import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";

const MAX_REVIEWS = 10;

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.slice(0, MAX_REVIEWS).map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
