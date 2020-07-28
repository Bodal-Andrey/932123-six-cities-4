import React from "react";
import PropTypes from "prop-types";
import {ratingTitle} from "../../const.js";

const RATING_STARS = [5, 4, 3, 2, 1];

const ReviewsRating = (props) => {
  const {isFormDisabled, onRatingChange, rating} = props;

  return (
    <div className="reviews__rating-form form__rating">
      {RATING_STARS.map((item) => {
        const id = item === 1 ? `${item}-star` : `${item}-stars`;
        return (
          <React.Fragment key={item}>
            <input onChange={onRatingChange} disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" value={item} id={id} type="radio" checked={rating === String(item)} />
            <label htmlFor={id} className="reviews__rating-label form__rating-label" title={ratingTitle[item]}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

ReviewsRating.propTypes = {
  isFormDisabled: PropTypes.bool.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};

export default ReviewsRating;
