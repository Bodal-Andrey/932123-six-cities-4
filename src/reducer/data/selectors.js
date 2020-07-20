import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

const getCity = (state) => {
  return state[NameSpace.DATA].city;
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

export {getOffers, getCity, getFilteredOffers, getCities};
