import {extend} from "./utils.js";
import offers from "./mocks/offers.js";
import {SortingTypes} from "./const.js";

const cities = Array.from(new Set(offers.map((item) => item.city.name)));

const initialState = {
  city: offers[0].city.name,
  offers,
  cities,
  sortType: SortingTypes.POPULAR,
  activeOfferId: null,
};

const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  SORT_CHANGE: `SORT_CHANGE`,
  ACTIVE_OFFER_ID_CHANGE: `ACTIVE_OFFER_ID_CHANGE`,
};

const ActionCreator = {
  cityChange: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city,
  }),
  sortChange: (sortType) => ({
    type: ActionType.SORT_CHANGE,
    payload: sortType,
  }),
  activeOfferIdChange: (id) => ({
    type: ActionType.ACTIVE_OFFER_ID_CHANGE,
    payload: id,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {city: action.payload});
    case ActionType.SORT_CHANGE:
      return extend(state, {sortType: action.payload});
    case ActionType.ACTIVE_OFFER_ID_CHANGE:
      return extend(state, {activeOfferId: action.payload});
  }
  return state;
};

export {ActionType, ActionCreator, reducer};
