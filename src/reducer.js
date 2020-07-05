import {extend} from "./utils.js";
import offers from "./mocks/offers.js";

const initialState = {
  city: offers[0].city.name,
  offers,
  cities: Array.from(new Set(offers.map((item) => item.city.name))),
};

const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
};

const ActionCreator = {
  cityChange: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {city: action.payload});
  }
  return state;
};

export {ActionType, ActionCreator, reducer};
