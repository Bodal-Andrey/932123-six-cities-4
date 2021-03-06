import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data.js";
import {firstLetter} from "../../utils.js";
import {CardType, AppRoute} from "../../const.js";
import {Link} from 'react-router-dom';

const typeToArticleClass = {
  [CardType.MAIN]: `cities__place-card`,
  [CardType.PROPERTY]: `near-places__card`,
  [CardType.FAVORITES]: `favorites__card`,
};

const typeToWrapperClass = {
  [CardType.MAIN]: `cities__image-wrapper`,
  [CardType.PROPERTY]: `near-places__image-wrapper`,
  [CardType.FAVORITES]: `favorites__image-wrapper`,
};

const Card = (props) => {
  const {offer, onActiveItemChange, onFavoriteToggle, cardType} = props;
  const {id, title, previewImage, price, type, rating, isPremium, isFavorite} = offer;

  return (
    <article
      onMouseEnter={() => onActiveItemChange(offer.id)}
      onMouseLeave={() => onActiveItemChange(-1)}
      className={`${typeToArticleClass[cardType]} place-card`}
    >
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${typeToWrapperClass[cardType]} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === CardType.FAVORITES ? `150` : `260`}
            height={cardType === CardType.FAVORITES ? `110` : `200`}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${cardType === CardType.FAVORITES ? `favorites__card-info ` : ``}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button onClick={() => onFavoriteToggle(id, !isFavorite)} className={`place-card__bookmark-button button ${isFavorite ? ` place-card__bookmark-button--active` : ``}`} type="button">
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
          <Link to={`${AppRoute.ROOM}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{firstLetter(type)}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  onActiveItemChange: PropTypes.func.isRequired,
  onFavoriteToggle: PropTypes.func,
  cardType: PropTypes.oneOf([CardType.MAIN, CardType.PROPERTY, CardType.FAVORITES]).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteToggle(offerId, favoriteStatus) {
    dispatch(Operation.addToFavorite(offerId, favoriteStatus));
  },
});

export {Card};

export default connect(null, mapDispatchToProps)(Card);
