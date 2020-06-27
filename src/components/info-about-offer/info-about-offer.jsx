import React from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import Map from "../map/map.jsx";
import NearbyList from "../nearby-list/nearby-list.jsx";

const InfoAboutOffer = (props) => {
  const {offer, onChangeScreen} = props;
  const {title, price, type, rating, isPremium, isBookmark, images, description, feature, guests, inside, owner, additional} = offer;
  const {avatar, name, isStar} = owner;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => (
                <div key={`${i}-${image}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className= {`property__bookmark-button button ${isBookmark ? ` property__bookmark-button--active` : ``}`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">{isBookmark ? `In bookmarks` : `To bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: Math.round(rating) * 20 + `%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {feature}
                </li>
                <li className="property__feature property__feature--adults">
                  {guests}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What is inside</h2>
                <ul className="property__inside-list">
                  {inside.map((it, i) => (
                    <li key={`${i}-${it}`} className="property__inside-item">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isStar ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatar} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  {description.map((paragraph, i) => (
                    <p key={i} className="property__text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <ReviewsList offer={offer} />
            </div>
          </div>
          <Map offers={additional} city={[52.38333, 4.9]} offerId={1} className={`property__map map`} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearbyList offers={additional} onChangeScreen={onChangeScreen} />
          </section>
        </div>
      </main>
    </div>
  );
};

InfoAboutOffer.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    feature: PropTypes.string.isRequired,
    guests: PropTypes.string.isRequired,
    inside: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isStar: PropTypes.bool.isRequired,
    }).isRequired,
    additional: PropTypes.array.isRequired,
  }).isRequired,
  onChangeScreen: PropTypes.func.isRequired,
};

export default InfoAboutOffer;
