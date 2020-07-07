import {ActionType, ActionCreator, reducer} from "./reducer.js";
import offers from "./data-test.js";

const cities = Array.from(new Set(offers.map((item) => item.city.name)));

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: offers[0].city.name,
    offers,
    cities
  });
});

it(`Reducer should change city name`, () => {
  expect(reducer({
    city: offers[0].city.name,
    offers,
    cities
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  })).toEqual({
    city: `Amsterdam`,
    offers,
    cities
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.cityChange(`Amsterdam`)).toEqual({
      type: ActionType.CITY_CHANGE,
      payload: `Amsterdam`,
    });
  });
});
