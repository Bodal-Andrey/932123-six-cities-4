import {extend} from "../../utils.js";
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
};

const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  ACTIVE_OFFER_ID_CHANGE: `ACTIVE_OFFER_ID_CHANGE`,
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
  loadReviews: (id, commentData) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`, commentData)
      .then((response) => {
        const loadedReviews = response.data.map((review) => reviewAdapter(review));
        dispatch(ActionCreator.loadReviews(loadedReviews));
      });
  },
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
        reviews: action.payload,
        isReviewsLoading: false
      });
    case ActionType.ACTIVE_OFFER_ID_CHANGE:
      return extend(state, {activeOfferId: action.payload});
  }
  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
