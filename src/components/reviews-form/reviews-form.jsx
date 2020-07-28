import React from "react";
import PropTypes from "prop-types";
import ReviewsRating from "../reviews-rating/reviews-rating.jsx";

class ReviewsForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``,
      textError: ``,
      isFormDisabled: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  _resetFromState() {
    this.setState({
      rating: ``,
      review: ``,
      textError: ``,
    });
  }

  _enableForm() {
    this.setState({isFormDisabled: false});
  }

  _disableForm() {
    this.setState({isFormDisabled: true});
  }

  handleChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {offerId, onPostReview} = this.props;
    this._disableForm();

    onPostReview(offerId, {review: this.state.review, rating: this.state.rating})
    .then(() => {
      this._resetFromState();
      this._enableForm();
    }).catch((result) => {
      this.setState({
        textError: `${result}; text: ${result.response.data.error}`,
      });
      this._enableForm();
    });
  }

  render() {
    const {review, rating, isFormDisabled, textError} = this.state;
    const isSubmitDisabled = !(rating && (review.length >= 50 && review.length <= 300));

    return (
      <form onSubmit={this.handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <ReviewsRating
          isFormDisabled={isFormDisabled}
          rating={rating}
          onRatingChange={this.handleChange} />
        <textarea onChange={this.handleChange} disabled={isFormDisabled} value={review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
        </div>
        {textError &&
          <div style={{marginTop: `15px`, fontSize: `15px`, fontWeight: `bold`, color: `#ff0000`}}>{textError}</div>
        }
      </form>
    );
  }
}

ReviewsForm.propTypes = {
  onPostReview: PropTypes.func.isRequired,
  offerId: PropTypes.any.isRequired,
};

export default ReviewsForm;
