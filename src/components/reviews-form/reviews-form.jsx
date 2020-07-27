import React from "react";
import PropTypes from "prop-types";

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
    const {isSubmitDisabled, isFormDisabled, textError} = this.state;

    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div onChange={this.handleChange} className="reviews__rating-form form__rating">
          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea onChange={this.handleChange} disabled={isFormDisabled} value={this.state.review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} />
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
