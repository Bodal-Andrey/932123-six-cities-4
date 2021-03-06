import React from "react";
import PropTypes from "prop-types";
import {getReviewDate} from "../../utils.js";

const ReviewsItem = (props) => {
  const {review} = props;
  const {comment, rating, user, date} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating * 20 + `%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{getReviewDate(date)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReviewsItem;
