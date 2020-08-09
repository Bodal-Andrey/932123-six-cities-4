import {extend} from "../../utils.js";
import offerAdapter from "../adapter/offer-adapter/offer-adapter.js";
import reviewAdapter from "../adapter/review-adapter/review-adapter.js";
import {AppRoute, SortingTypes} from "../../const.js";
import history from "../../history.js";

const FavoriteStatus = {
  IN_FAVORITES: `1`,
  OUT_OF_FAVORITES: `0`,
};

const initialState = {
  city: ``,
  offers: [],
  nearbyOffers: [],
  isNearbyOffersLoading: true,
  reviews: [],
  isReviewsLoading: true,
  sortType: SortingTypes.POPULAR,
  errorText: ``,
};

const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  ADD_TO_FAVORITE: `ADD_TO_FAVORITE`,
  REVIEW_CHANGE: `REVIEW_CHANGE`,
  UPDATE_FAVORITE: `UPDATE_FAVORITE`,
  SORT_CHANGE: `SORT_CHANGE`,
  ERROR_CHANGE: `ERROR_CHANGE`,
};

const ActionCreator = {
  cityChange: (city) => {
    return {
      type: ActionType.CITY_CHANGE,
      payload: city,
    };
  },
  loadOffers: (loadedOffers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: loadedOffers,
    };
  },
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
  loadFavoriteOffers: (favoriteOffers) => {
    return {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffers
    };
  },
  uploadReviews: (review) => {
    return {
      type: ActionType.REVIEW_CHANGE,
      payload: review
    };
  },
  updateFavorite: (offer) => {
    return {
      type: ActionType.UPDATE_FAVORITE,
      payload: offer
    };
  },
  sortChange: (sortType) => {
    return {
      type: ActionType.SORT_CHANGE,
      payload: sortType,
    };
  },
  errorChange: (errorText) => ({
    type: ActionType.ERROR_CHANGE,
    payload: errorText
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
        .then((response) => {
          const loadedOffers = response.data.map((offer) => offerAdapter(offer));
          dispatch(ActionCreator.loadOffers(loadedOffers));
          dispatch(ActionCreator.cityChange(loadedOffers[0].city.name));
        });
  },
  loadNearbyOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then((response) => {
        const loadedNearbyOffers = response.data.map((offer) => offerAdapter(offer));
        dispatch(ActionCreator.loadNearbyOffers(loadedNearbyOffers));
      });
  },
  loadReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        const loadedReviews = response.data.map((review) => reviewAdapter(review));
        dispatch(ActionCreator.loadReviews(loadedReviews));
      });
  },
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const loadedFavoriteOffers = response.data.map((offer) => offerAdapter(offer));
        dispatch(ActionCreator.loadFavoriteOffers(loadedFavoriteOffers));
      });
  },
  addToFavorite: (offerId, isFavorite) => (dispatch, getState, api) => {
    const favoriteStatus = isFavorite ? FavoriteStatus.IN_FAVORITES : FavoriteStatus.OUT_OF_FAVORITES;
    return api.post(`/favorite/${offerId}/${favoriteStatus}`, {})
      .then((response) => {
        dispatch(ActionCreator.updateFavorite(offerAdapter(response.data)));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          history.push(AppRoute.LOGIN);
        }
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
      return extend(state, {offers: action.payload});
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload,
        isNearbyOffersLoading: false
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
        isReviewsLoading: false
      });
    case ActionType.SORT_CHANGE:
      return extend(state, {sortType: action.payload});
    case ActionType.UPDATE_FAVORITE:
      const indexFavorite = state.offers.findIndex((item) => item.id === action.payload.id);
      return extend(state, {offers: [].concat(...state.offers.slice(0, indexFavorite), action.payload, ...state.offers.slice(indexFavorite + 1, state.offers.length))});
    case ActionType.LOAD_FAVORITE_OFFERS:
      const newOffers = state.offers.map((offer) => {
        const offerIndex = action.payload.findIndex((it) => it.id === offer.id);
        return offerIndex !== -1 ? action.payload[offerIndex] : offer;
      });
      return extend(state, {offers: newOffers});
    case ActionType.ERROR_CHANGE:
      return extend(state, {errorText: action.payload});
  }
  return state;
};

export {ActionType, ActionCreator, Operation, FavoriteStatus, reducer};
