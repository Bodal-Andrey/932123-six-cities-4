import MockAdapter from "axios-mock-adapter";
import {createApi} from "../../api.js";
import {ActionType, ActionCreator, Operation, reducer} from "./data.js";
import {offers} from "../../data-test.js";

const offersInitial = [
  {
    bedrooms: 1,
    city: {name: `Dusseldorf`, location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}},
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    goods: [`Air conditioning`, `Towels`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Breakfast`],
    host: {id: 25, name: `Angelina`, [`is_pro`]: true, [`avatar_url`]: `img/avatar-angelina.jpg`},
    id: 1,
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
    [`is_favorite`]: false,
    [`is_premium`]: false,
    location: {latitude: 51.217402, longitude: 6.7693140000000005, zoom: 16},
    [`max_adults`]: 3,
    [`preview_image`]: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
    price: 282,
    rating: 5,
    title: `Wood and stone place`,
    type: `room`,
  }
];
const offersResult = [
  {
    bedrooms: 1,
    city: {name: `Dusseldorf`, coordinates: [51.225402, 6.776314], zoom: 13},
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    features: [`Air conditioning`, `Towels`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Breakfast`],
    guests: 3,
    host: {avatarUrl: `img/avatar-angelina.jpg`, id: 25, isPro: true, name: `Angelina`},
    id: 1,
    isFavorite: false,
    isPremium: false,
    location: {coordinates: [51.217402, 6.7693140000000005], zoom: 16},
    pictures: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
    previewImage: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
    price: 282,
    rating: 5,
    title: `Wood and stone place`,
    type: `room`,
  }
];

const reviewsInitial = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      [`avatar_url`]: `img/1.png`,
      id: 4,
      [`is_pro`]: false,
      name: `Max`
    }
  }
];

const reviewsResult = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  }
];

const api = createApi(() => {});

describe(`Reducer work correctly`, () => {
  it(`Reducer without parameters return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: ``,
      offers: [],
      activeOfferId: -1,
      nearbyOffers: [],
      isNearbyOffersLoading: true,
      reviews: [],
      isReviewsLoading: true,
    });
  });

  it(`Reducer should change city name`, () => {
    expect(reducer({
      city: ``,
      offers: [],
      activeOfferId: -1,
      nearbyOffers: offers,
      isNearbyOffersLoading: true,
      reviews: [],
      isReviewsLoading: true,
    }, {
      type: ActionType.CITY_CHANGE,
      payload: `Dusseldorf`,
    })).toEqual({
      city: `Dusseldorf`,
      offers: [],
      activeOfferId: -1,
      nearbyOffers: offers,
      isNearbyOffersLoading: true,
      reviews: [],
      isReviewsLoading: true,
    });
  });

  it(`Reducer update offers`, () => {
    expect(reducer({
      city: ``,
      offers: [],
      activeOfferId: -1,
      nearbyOffers: offers,
      isNearbyOffersLoading: true,
      reviews: [],
      isReviewsLoading: true,
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offersInitial,
    })).toEqual({
      city: ``,
      offers: offersInitial,
      activeOfferId: -1,
      nearbyOffers: offers,
      isNearbyOffersLoading: true,
      reviews: [],
      isReviewsLoading: true,
    });
  });

  it(`Reducer change active offer id`, () => {
    expect(reducer({
      city: ``,
      offers: [],
      activeOfferId: -1,
      nearbyOffers: offers,
      isNearbyOffersLoading: true,
      reviews: [],
      isReviewsLoading: true,
    }, {
      type: ActionType.ACTIVE_OFFER_ID_CHANGE,
      payload: 2,
    })).toEqual({
      city: ``,
      offers: [],
      activeOfferId: 2,
      nearbyOffers: offers,
      isNearbyOffersLoading: true,
      reviews: [],
      isReviewsLoading: true,
    });
  });

  it(`Reducer load reviews`, () => {
    expect(reducer({
      city: ``,
      offers: [],
      activeOfferId: -1,
      nearbyOffers: offers,
      isNearbyOffersLoading: true,
      reviews: [],
      isReviewsLoading: true,
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsInitial,
    })).toEqual({
      city: ``,
      offers: [],
      activeOfferId: -1,
      nearbyOffers: offers,
      isNearbyOffersLoading: true,
      reviews: [],
      isReviewsLoading: reviewsInitial,
    });
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
    expect(ActionCreator.loadOffers(offersResult)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offersResult,
    });
  });

  it(`Action creator for changing offer id returns correct action`, () => {
    expect(ActionCreator.activeOfferIdChange(2)).toEqual({
      type: ActionType.ACTIVE_OFFER_ID_CHANGE,
      payload: 2,
    });
  });

  it(`Action creator for loading reviews returns correct action`, () => {
    expect(ActionCreator.loadReviews(reviewsResult)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsResult,
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should give a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loaderOffers = Operation.loadOffers();

    apiMock
        .onGet(`/hotels`)
        .reply(200, [...offersInitial]);

    return loaderOffers(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_OFFERS,
            payload: [...offersResult],
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.CITY_CHANGE,
            payload: `Hamburg`,
          });
        });
  });

  it(`Should make a correct API call to /comments/1`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadReviews = Operation.loadReviews(1, {comment: `test`, rating: `5`});

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [...reviewsInitial]);

    return loadReviews(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [...reviewsResult],
        });
      });
  });
});
