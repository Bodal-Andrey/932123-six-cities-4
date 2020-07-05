import {extend} from "./utils.js";
import offers from "./mocks/offers.js";

const initialState = {
  city: `Amsterdam`,
  offers
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

export {ActionCreator, reducer};
