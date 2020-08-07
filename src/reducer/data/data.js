import {extend, parseOffer} from "../../utils.js";
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
        const loadedFavorites = response.data.map((offer) => offerAdapter(offer));
        dispatch(ActionCreator.loadFavoriteOffers(loadedFavorites));
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
    case ActionType.SORT_CHANGE:
      return extend(state, {sortType: action.payload});
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
    case ActionType.UPDATE_FAVORITE:
      const indexFavorite = state.offers.findIndex((item) => item.id === action.payload.id);
      return extend(state, {offers: [].concat(...state.offers.slice(0, indexFavorite), action.payload, ...state.offers.slice(indexFavorite + 1, state.offers.length))});
    case ActionType.LOAD_FAVORITE_OFFERS:
      const newOffers = state.offers.map((offer) => {
        const offerIndex = action.payload.findIndex((it) => it.id === offer.id);
        return offerIndex !== -1 ? action.payload[offerIndex] : offer;
      });
      return extend(state, {offers: newOffers});
  }
  return state;
};

export {ActionType, ActionCreator, Operation, FavoriteStatus, reducer};
