import createAuth from "../adapter/auth-adapter/auth-adapter.js";
import {extend} from "../../utils.js";
import {AuthorizationStatus} from "../../const.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isSignIn: false,
  authInfo: {
    avatarUrl: ``,
    name: ``,
    id: null,
    isPro: null,
    email: ``,
  },
};

const ActionType = {
  AUTH_STATUS_CHANGE: `AUTH_STATUS_CHANGE`,
  AUTH_INFO_CHANGE: `AUTH_INFO_CHANGE`,
  SIGN_IN: `SIGN_IN`,
};

const ActionCreator = {
  authStatusChange: (authStatus) => {
    return {
      type: ActionType.AUTH_STATUS_CHANGE,
      payload: authStatus,
    };
  },
  authInfoChange: (authStatus) => {
    return {
      type: ActionType.AUTH_INFO_CHANGE,
      payload: authStatus,
    };
  },
  signingIn: () => {
    return {
      type: ActionType.SIGN_IN,
      payload: null,
    };
  },
};

const Operation = {
  authCheck: () => (dispatch, getState, api) => {
    return api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.authInfoChange(createAuth(response.data)));
      dispatch(ActionCreator.authStatusChange(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.signingIn());
    }).catch((err) => {
      throw err;
    });
  },
  userLogin: (userData) => (dispatch, getState, api) => {
    return api.post(`/login`, userData)
    .then((response) => {
      dispatch(ActionCreator.authInfoChange(createAuth(response.data)));
      dispatch(ActionCreator.authStatusChange(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.signingIn());
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_STATUS_CHANGE:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.AUTH_INFO_CHANGE:
      return extend(state, {authInfo: action.payload});
    case ActionType.SIGN_IN:
      return extend(state, {isSignIn: true});
  }
  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
