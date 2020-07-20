import {extend} from "../../utils.js";
import offerAdapter from "../../offer-adapter.js";

const initialState = {
  city: ``,
  offers: [],
};

const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
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
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
        .then((response) => {
          const loadedOffers = response.data.map((offer) => offerAdapter(offer));
          dispatch(ActionCreator.loadOffers(loadedOffers));
          dispatch(ActionCreator.cityChange(loadedOffers[0].city.name));
          return loadedOffers;
        });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {city: action.payload});
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
  }
  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
