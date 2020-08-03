import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ReviewsList from "../../reviews-list/reviews-list.jsx";
import ReviewsForm from "../../reviews-form/reviews-form.jsx";
import Map from "../../map/map.jsx";
import CardsList from "../../cards-list/cards-list.jsx";
import Header from "../../header/header.jsx";
import {CardsClass, AuthorizationStatus, AppRoute} from "../../../const.js";
import {getNearbyOffers, getNearbyOffersStatus, getReviews, getReviewsStatus, getCurrentOffer} from "../../../reducer/data/selectors.js";
import {Operation as DataOperation} from '../../../reducer/data/data.js';
import {getAuthStatus} from "../../../reducer/user/selectors.js";
import history from "../../../history.js";

class InfoAboutOffer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offerId, loadOfferData} = this.props;
    loadOfferData(offerId);
  }

  componentDidUpdate(prevProps) {
    const {offerId, loadOfferData} = this.props;
    if (this.props.offerId !== prevProps.offerId) {
      loadOfferData(offerId);
    }
  }

  render() {
    const {offer, offerId, onChangeScreen, nearbyOffers, isNearbyOffersLoading, reviews, isReviewsLoading, isAuthorizedUser, onFavoriteToggle} = this.props;
    const {id, title, price, type, rating, isPremium, isFavorite, pictures, description, bedrooms, guests, features, host} = offer;
    const {avatarUrl, name, isPro} = host;

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
                  <button className= {`property__bookmark-button button ${isFavorite ? ` property__bookmark-button--active` : ``}`} type="button">
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
              offers={nearbyOffers}
              city={offer.city.coordinates}
              activeOfferId={id}
              zoom={offer.city.zoom}
              className={`property__map map`}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <CardsList
                offers={nearbyOffers}
                onChangeScreen={onChangeScreen}
                onActiveItemChange={() => {}}
                cardsClass={CardsClass.NEAR_PLACES}
                onFavoriteToggle={onFavoriteToggle}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, {offerId}) => ({
  offer: getCurrentOffer(offerId)(state),
  nearbyOffers: getNearbyOffers(state),
  isNearbyOffersLoading: getNearbyOffersStatus(state),
  reviews: getReviews(state),
  isReviewsLoading: getReviewsStatus(state),
  isAuthorizedUser: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferData(id) {
    dispatch(DataOperation.loadNearbyOffers(id));
    dispatch(DataOperation.loadReviews(id));
  },
  onFavoriteToggle(offerId, favoriteStatus) {
    dispatch(DataOperation.addToFavorite(offerId, favoriteStatus))
    .catch((error) => {
      if (error.response.status === 401) {
        history.push(AppRoute.LOGIN);
      }
    });
  },
});

InfoAboutOffer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  onChangeScreen: PropTypes.func,
  reviews: PropTypes.array.isRequired,
  nearbyOffers: PropTypes.array.isRequired,
  isNearbyOffersLoading: PropTypes.bool.isRequired,
  isReviewsLoading: PropTypes.bool.isRequired,
  loadOfferData: PropTypes.func,
  isAuthorizedUser: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export {InfoAboutOffer};

export default connect(mapStateToProps, mapDispatchToProps)(InfoAboutOffer);
