import {extend, parseOffer} from "../../utils.js";
import offerAdapter from "../adapter/offer-adapter.js";
import reviewAdapter from "../adapter/review-adapter.js";

const initialState = {
  city: ``,
  offers: [],
  activeOfferId: -1,
  nearbyOffers: [],
  isNearbyOffersLoading: true,
  reviews: [],
  isReviewsLoading: true,
  favoriteOffers: [],
};

const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  ACTIVE_OFFER_ID_CHANGE: `ACTIVE_OFFER_ID_CHANGE`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  ADD_TO_FAVORITE: `ADD_TO_FAVORITE`,
  REVIEW_CHANGE: `REVIEW_CHANGE`
};

const ActionCreator = {
  cityChange: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city,
  }),
  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers,
  }),
  loadNearbyOffers: (nearbyOffers) => {
    return {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: nearbyOffers
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    };
  },
  activeOfferIdChange: (id) => ({
    type: ActionType.ACTIVE_OFFER_ID_CHANGE,
    payload: id,
  }),
  addToFavorite: (offer) => {
    return {
      type: ActionType.ADD_TO_FAVORITE,
      payload: offer,
    };
  },
  loadFavoriteOffers: (favoriteOffers) => {
    return {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffers
    };
  },
  uploadReviews: (review) => ({
    type: ActionType.REVIEW_CHANGE,
    payload: review
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
        .then((response) => {
          dispatch(ActionCreator.loadOffers(response.data));
          dispatch(ActionCreator.cityChange(response.data[0].city.name));
        });
  },
  loadNearbyOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearbyOffers(response.data));
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteOffers(response.data));
      });
  },
  addToFavorite: (offer) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offer.id}/${+!offer.isFavorite}`, {})
      .then((response) => {
        dispatch(Operation.loadFavoriteOffers());
        dispatch(ActionCreator.addToFavorite(response.data));
      });
  },
  uploadReviews: (rating, review, offerId) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`,
        {
          comment: review,
          rating
        }
    )
      .then((response) => {
        if (response.status === 200) {
          dispatch(Operation.loadReviews(offerId));
        }
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {city: action.payload});
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload.map(offerAdapter)});
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload.map(offerAdapter),
        isNearbyOffersLoading: false
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload.map(reviewAdapter),
        isReviewsLoading: false
      });
    case ActionType.ACTIVE_OFFER_ID_CHANGE:
      return extend(state, {activeOfferId: action.payload});
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {favoriteOffers: action.payload.map(offerAdapter)});
    case ActionType.ADD_TO_FAVORITE:
      let parsedOffer = parseOffer(action.payload);
      const reloadedOffers = state.offers.slice();
      const index = reloadedOffers.findIndex((el) => el.id === parsedOffer.id);
      reloadedOffers.splice(index, 1, parsedOffer);
      const reloadFavoriteOffers = reloadedOffers.filter((offer) => offer.isFavorite === true);
      return extend(state, {
        offers: reloadedOffers,
        favoriteOffers: reloadFavoriteOffers
      });
  }
  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
