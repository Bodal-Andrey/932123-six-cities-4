import {extend, parseOffer, parseReview} from "../../utils.js";

const initialState = {
  city: ``,
  offers: [],
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
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
        .then((response) => {
          dispatch(ActionCreator.loadOffers(response.data));
          dispatch(ActionCreator.cityChange(response.data));
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      let parsedCityOffers = action.payload.map((offer) => parseOffer(offer));
      return extend(state, {city: parsedCityOffers[0].city});
    case ActionType.LOAD_OFFERS:
      let parsedOffers = action.payload.map((offer) => parseOffer(offer));
      return extend(state, {offers: parsedOffers});
    case ActionType.LOAD_NEARBY_OFFERS:
      let parsedNearbyOffers = action.payload.map((offer) => parseOffer(offer));
      return extend(state, {
        nearbyOffers: parsedNearbyOffers,
        isNearbyOffersLoading: false
      });
    case ActionType.LOAD_REVIEWS:
      let parsedReviews = action.payload.map((review) => parseReview(review));
      return extend(state, {
        reviews: parsedReviews,
        isReviewsLoading: false
      });
  }
  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
