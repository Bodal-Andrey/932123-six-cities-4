import MockAdapter from "axios-mock-adapter";
import createAPI from "../../api.js";
import {ActionType, Operation, reducer} from "./user.js";
import {AuthorizationStatus} from "../../const.js";

const AuthInfoInitial = {
  [`avatar_url`]: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  [`is_pro`]: false,
  name: `Oliver.conner`
};

const AuthInfo = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSignIn: false,
    authInfo: {
      avatarUrl: ``,
      email: ``,
      id: null,
      isPro: null,
      name: ``,
    }
  });
});

it(`Reducer should update AuthorizationStatus`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSignIn: false,
    authInfo: {
      avatarUrl: ``,
      email: ``,
      id: null,
      isPro: null,
      name: ``,
    }
  }, {
    type: ActionType.AUTH_STATUS_CHANGE,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    isSignIn: false,
    authInfo: {
      avatarUrl: ``,
      email: ``,
      id: null,
      isPro: null,
      name: ``,
    }
  });
});

it(`Reducer should update authorization info by authInfo`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSignIn: false,
    authInfo: {
      avatarUrl: ``,
      email: ``,
      id: null,
      isPro: null,
      name: ``,
    }
  }, {
    type: ActionType.AUTH_INFO_CHANGE,
    payload: AuthInfo,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSignIn: false,
    authInfo: {
      avatarUrl: `img/1.png`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      isPro: false,
      name: `Oliver.conner`
    }
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API POST call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authLoader = Operation.userLogin({email: `Oliver.conner@gmail.com`, password: `12345`});

    apiMock
      .onPost(`/login`)
      .reply(200, AuthInfoInitial);

    return authLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.AUTH_INFO_CHANGE,
          payload: AuthInfo,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.AUTH_STATUS_CHANGE,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
});
