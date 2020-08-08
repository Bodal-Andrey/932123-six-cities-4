import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ReviewsList from "../../reviews-list/reviews-list.jsx";
import ReviewsForm from "../../reviews-form/reviews-form.jsx";
import Map from "../../map/map.jsx";
import CardsList from "../../cards-list/cards-list.jsx";
import Header from "../../header/header.jsx";
import {AuthorizationStatus, CardType} from "../../../const.js";
import {getNearbyOffersStatus, getReviewsStatus, getCurrentOffer, getSortedReviews, getActualNearbyOffers} from "../../../reducer/data/selectors.js";
import {Operation as DataOperation} from '../../../reducer/data/data.js';
import {getAuthStatus} from "../../../reducer/user/selectors.js";

class RoomPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadOfferData, match} = this.props;
    const id = parseInt(match.params.id, 10);
    loadOfferData(id);
  }

  componentDidUpdate(prevProps) {
    const {loadOfferData, match} = this.props;
    const {match: prevMatch} = prevProps;
    const id = parseInt(match.params.id, 10);
    const prevId = parseInt(prevMatch.params.id, 10);
    if (id !== prevId) {
      loadOfferData(id);
    }
  }

  render() {
    const {offer, nearbyOffers, isNearbyOffersLoading, reviews, isReviewsLoading, isAuthorizedUser, onFavoritesToggle, match} = this.props;
    const {title, price, type, rating, isPremium, isFavorite, pictures, description, bedrooms, guests, features, host} = offer;
    const {avatarUrl, name, isPro} = host;
    const offerId = parseInt(match.params.id, 10);
    const mapOffers = [].concat(nearbyOffers, offer);

    if (!offer) {
      return null;
    }

    if (isReviewsLoading || isNearbyOffersLoading) {
      return false;
    }

    return (
      <div className="page">
        <Header isLogoActive={false} />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {pictures.slice(0, 6).map((picture, i) => (
                  <div key={`${i}-${picture}`} className="property__image-wrapper">
                    <img className="property__image" src={picture} alt="Photo studio" />
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
                  <button onClick={() => onFavoritesToggle(offerId, !isFavorite)} className= {`property__bookmark-button button ${isFavorite ? ` property__bookmark-button--active` : ``}`} type="button">
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
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
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                 Max {guests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What is inside</h2>
                  <ul className="property__inside-list">
                    {features.map((item, i) => (
                      <li key={`${i}-${item}`} className="property__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {name}
                    </span>
                    {isAuthorizedUser && <span className="property__user-status">
                    Pro
                    </span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList reviews={reviews} />
                  {isAuthorizedUser === AuthorizationStatus.AUTH && <ReviewsForm offerId={offerId} />}
                </section>
              </div>
            </div>
            <Map
              offers={mapOffers}
              city={offer.city.coordinates}
              activeOfferId={offerId}
              zoom={offer.city.zoom}
              className={`property__map map`}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <CardsList
                  offers={nearbyOffers}
                  onActiveItemChange={() => {}}
                  cardType={CardType.PROPERTY}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

RoomPage.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    pictures: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    }).isRequired,
    city: PropTypes.shape({
      coordinates: PropTypes.array.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  reviews: PropTypes.array.isRequired,
  nearbyOffers: PropTypes.array.isRequired,
  isNearbyOffersLoading: PropTypes.bool,
  isReviewsLoading: PropTypes.bool,
  loadOfferData: PropTypes.func,
  isAuthorizedUser: PropTypes.string.isRequired,
  onFavoritesToggle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, {match: {params}}) => ({
  offer: getCurrentOffer(Number(params.id))(state),
  nearbyOffers: getActualNearbyOffers(state),
  isNearbyOffersLoading: getNearbyOffersStatus(state),
  reviews: getSortedReviews(state),
  isReviewsLoading: getReviewsStatus(state),
  isAuthorizedUser: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferData(id) {
    dispatch(DataOperation.loadNearbyOffers(id));
    dispatch(DataOperation.loadReviews(id));
  },
  onFavoritesToggle(offerId, favoriteStatus) {
    dispatch(DataOperation.addToFavorite(offerId, favoriteStatus));
  },
});

export {RoomPage};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
