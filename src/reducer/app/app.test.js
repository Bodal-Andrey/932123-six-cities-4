import {ActionType, ActionCreator, reducer} from "./app.js";
import {SortingTypes} from "../../const.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    sortType: SortingTypes.POPULAR,
    activeOfferId: -1,
  });
});

it(`Reducer should change sort type`, () => {
  expect(reducer({
    sortType: SortingTypes.POPULAR,
    activeOfferId: -1,
  }, {
    type: ActionType.SORT_CHANGE,
    payload: SortingTypes.PRICE_LOW_TO_HIGH
  })).toEqual({
    activeOfferId: -1,
    sortType: SortingTypes.PRICE_LOW_TO_HIGH
  });
});

it(`Reducer should change active offer id`, () => {
  expect(reducer({
    sortType: SortingTypes.POPULAR,
    activeOfferId: -1,
  }, {
    type: ActionType.ACTIVE_OFFER_ID_CHANGE,
    payload: 1
  })).toEqual({
    sortType: SortingTypes.POPULAR,
    activeOfferId: 1
  });
});

describe(`Action creators work correctly`, () => {
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
