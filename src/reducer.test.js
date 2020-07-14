import {ActionType, ActionCreator, reducer} from "./reducer.js";
import offers from "./data-test.js";
import {SortingTypes} from "./const.js";

const cities = Array.from(new Set(offers.map((item) => item.city.name)));

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: offers[0].city.name,
    offers,
    cities,
    sortType: SortingTypes.POPULAR,
    activeOfferId: -1,
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

it(`Reducer should change sort type`, () => {
  expect(reducer({
    offers,
    cities,
    sortType: SortingTypes.POPULAR,
  }, {
    type: ActionType.SORT_CHANGE,
    payload: SortingTypes.PRICE_LOW_TO_HIGH
  })).toEqual({
    offers,
    cities,
    sortType: SortingTypes.PRICE_LOW_TO_HIGH
  });
});

it(`Reducer should change active offer id`, () => {
  expect(reducer({
    offers,
    cities,
    sortType: SortingTypes.POPULAR,
    activeOfferId: -1,
  }, {
    type: ActionType.ACTIVE_OFFER_ID_CHANGE,
    payload: 1
  })).toEqual({
    offers,
    cities,
    sortType: SortingTypes.POPULAR,
    activeOfferId: 1
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for city change returns correct action`, () => {
    expect(ActionCreator.cityChange(`Amsterdam`)).toEqual({
      type: ActionType.CITY_CHANGE,
      payload: `Amsterdam`,
    });
  });

  it(`Action creator for sort change returns correct action`, () => {
    expect(ActionCreator.sortChange(SortingTypes.TOP_RATED_FIRST)).toEqual({
      type: ActionType.SORT_CHANGE,
      payload: SortingTypes.TOP_RATED_FIRST,
    });
  });

  it(`Action creator for active offer id change returns correct action`, () => {
    expect(ActionCreator.activeOfferIdChange(2)).toEqual({
      type: ActionType.ACTIVE_OFFER_ID_CHANGE,
      payload: 2,
    });
  });
});
