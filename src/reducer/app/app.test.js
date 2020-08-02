import {ActionType, ActionCreator, reducer} from "./app.js";
import {SortingTypes} from "../../const.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      sortType: SortingTypes.POPULAR,
      activeOfferId: -1,
      showAuthPage: false,
    });
  });

  it(`Reducer should change sort type`, () => {
    expect(reducer({
      sortType: SortingTypes.POPULAR,
      activeOfferId: -1,
      showAuthPage: false,
    }, {
      type: ActionType.SORT_CHANGE,
      payload: SortingTypes.PRICE_LOW_TO_HIGH
    })).toEqual({
      activeOfferId: -1,
      showAuthPage: false,
      sortType: SortingTypes.PRICE_LOW_TO_HIGH
    });
  });

  it(`Reducer should change auth page state id by a given value`, () => {
    expect(reducer({
      city: ``,
      sortType: SortingTypes.POPULAR,
      activeOfferId: -1,
      showAuthPage: false,
    }, {
      type: ActionType.AUTH_STATE_CHANGE,
      payload: true,
    })).toEqual({
      city: ``,
      sortType: SortingTypes.POPULAR,
      activeOfferId: -1,
      showAuthPage: true,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for sort change returns correct action`, () => {
    expect(ActionCreator.sortChange(SortingTypes.TOP_RATED_FIRST)).toEqual({
      type: ActionType.SORT_CHANGE,
      payload: SortingTypes.TOP_RATED_FIRST,
    });
  });

  it(`Action creator for changing auth state page returns correct action`, () => {
    expect(ActionCreator.authStateChange(true)).toEqual({
      type: ActionType.AUTH_STATE_CHANGE,
      payload: true,
    });
  });
});
