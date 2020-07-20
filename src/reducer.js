import {extend} from "./utils.js";
import {SortingTypes} from "./const.js";
import offerAdapter from "./offer-adapter.js";

const initialState = {
  city: ``,
  offers: [],
  sortType: SortingTypes.POPULAR,
  activeOfferId: -1,
};

const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  SORT_CHANGE: `SORT_CHANGE`,
  ACTIVE_OFFER_ID_CHANGE: `ACTIVE_OFFER_ID_CHANGE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
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
  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers,
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
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {city: action.payload});
    case ActionType.SORT_CHANGE:
      return extend(state, {sortType: action.payload});
    case ActionType.ACTIVE_OFFER_ID_CHANGE:
      return extend(state, {activeOfferId: action.payload});
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
  }
  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
