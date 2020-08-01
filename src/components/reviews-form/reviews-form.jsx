import React from "react";
import PropTypes from "prop-types";
import ReviewsRating from "../reviews-rating/reviews-rating.jsx";
import withAddReviews from "../../hocs/with-add-reviews/with-add-reviews.js";

const ReviewsForm = ({onSubmitForm, isActiveSubmit, onChange, rating}) => {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmitForm();
        evt.target.reset();
      }}
      className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewsRating rating={rating} onChange={onChange} />
      <textarea onChange={onChange}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength="50" maxLength="300" required></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isActiveSubmit ? false : true}>Submit</button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  onSubmitForm: PropTypes.func,
  isActiveSubmit: PropTypes.bool,
  onChange: PropTypes.func,
  rating: PropTypes.string
};

export {ReviewsForm};

export default withAddReviews(ReviewsForm);
