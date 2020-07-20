import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const {offer, onChangeScreen, cardsClass, onActiveItemChange} = props;
  const {title, photo, price, type, rating, isPremium, isFavorite} = offer;

  return (
    <article onMouseEnter={() => onActiveItemChange(offer.id)} onMouseLeave={() => onActiveItemChange(-1)} className={`${cardsClass === `near-places` ? `near-places__card` : `cities__place-card`} place-card`}>
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
          <button className={`place-card__bookmark-button button ${isFavorite ? ` place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
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
    isFavorite: PropTypes.bool.isRequired,
  }),
  onChangeScreen: PropTypes.func.isRequired,
  cardsClass: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default Card;
