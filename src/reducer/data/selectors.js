import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {sortingOffers} from "../../utils.js";

const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

const getCity = (state) => {
  return state[NameSpace.DATA].city;
};

const getNearbyOffers = (state) => {
  return state[NameSpace.DATA].nearbyOffers;
};

const getNearbyOffersStatus = (state) => {
  return state[NameSpace.DATA].isNearbyOffersLoading;
};

const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};

const getReviewsStatus = (state) => {
  return state[NameSpace.DATA].isReviewsLoading;
};

const getSortType = (state) => {
  return state[NameSpace.DATA].sortType;
};

const getFilteredOffers = createSelector(
    getOffers,
    getCity,
    (resultOne, resultTwo) => {
      return resultOne.filter((item) => item.city.name === resultTwo);
    }
);

const getCities = createSelector(
    getOffers,
    (result) => {
      return Array.from(new Set(result.map((item) => item.city.name)));
    }
);

const stateMock = (state) => state;

const getCurrentOffer = (id) => createSelector(
    getOffers,
    stateMock,
    (offers) => {
      return offers.find((offer) => offer.id === Number(id));
    }
);

const getFavoritesOffers = createSelector(
    getOffers,
    (result) => {
      return result.filter((item) => item.isFavorite);
    }
);

const getFavoritesCities = createSelector(
    getFavoritesOffers,
    (result) => {
      return Array.from(new Set(result.map((item) => item.city.name)));
    }
);

const getSortedFilteredOffers = createSelector(
    getFilteredOffers,
    getSortType,
    (offers, sortType) => sortingOffers(offers, sortType)
);


export {
  getOffers,
  getCity,
  getCurrentOffer,
  getNearbyOffers,
  getNearbyOffersStatus,
  getReviews,
  getReviewsStatus,
  getSortType,
  getFavoritesOffers,
  getFilteredOffers,
  getCities,
  getFavoritesCities,
  getSortedFilteredOffers,
};
