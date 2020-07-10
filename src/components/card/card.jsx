import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";

const Card = (props) => {
  const {offer, onChangeScreen, cardsClass, onCardMouseHover} = props;
  const {title, photo, price, type, rating, isPremium, isBookmark} = offer;

  return (
    <article onMouseHover={() => onCardMouseHover(offer.id)} className={`${cardsClass === `near-places` ? `near-places__card` : `cities__place-card`} place-card`}>
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${cardsClass === `near-places` ? `near-places__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={photo} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isBookmark ? ` place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isBookmark ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: Math.round(rating) * 20 + `%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick={() => onChangeScreen(offer)} href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
  }),
  onChangeScreen: PropTypes.func.isRequired,
  cardsClass: PropTypes.string.isRequired,
  onCardMouseHover: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCardMouseHover(id) {
    dispatch(ActionCreator.activeOfferIdChange(id));
  }
});

export {Card};

export default connect(null, mapDispatchToProps)(Card);
