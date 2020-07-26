import MockAdapter from "axios-mock-adapter";
import {createApi} from "../../api.js";
import {ActionType, ActionCreator, Operation, reducer} from "./data.js";
import {offers} from "../../data-test.js";

const api = createApi(() => {});

it(`Reducer without parameters return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: ``,
    offers: [],
    nearbyOffers: [],
    isNearbyOffersLoading: true,
    reviews: [],
    isReviewsLoading: true,
  });
});

it(`Reducer should change city name`, () => {
  expect(reducer({
    city: ``,
    offers,
    nearbyOffers: offers,
    isNearbyOffersLoading: true,
    reviews: [],
    isReviewsLoading: true,
  }, {
    type: ActionType.CITY_CHANGE,
    payload: `Dusseldorf`,
  })).toEqual({
    city: `Dusseldorf`,
    offers,
    nearbyOffers: offers,
    isNearbyOffersLoading: true,
    reviews: [],
    isReviewsLoading: true,
  });
});

describe(`Operation work correctly`, () => {
  it(`Action creator when changing city returns correct action`, () => {
    expect(ActionCreator.cityChange(`Dusseldorf`)).toEqual({
      type: ActionType.CITY_CHANGE,
      payload: `Dusseldorf`,
    });
  });

  it(`Action creator when changing city returns correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });

  it(`Should give a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loaderOffers = Operation.loadOffers();

    apiMock
        .onGet(`/hotels`)
        .reply(200, [{fake: true}]);

    return loaderOffers(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_OFFERS,
            payload: [{fake: true}],
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.CITY_CHANGE,
            payload: `Hamburg`,
          });
        });
  });
});
