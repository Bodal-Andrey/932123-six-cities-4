import createAuth from "../adapter/auth-adapter.js";
import {extend} from "../../utils.js";
import {AuthorizationStatus} from "../../const.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
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
};

const ActionCreator = {
  authStatusChange: (authStatus) => ({
    type: ActionType.AUTH_STATUS_CHANGE,
    payload: authStatus,
  }),
  authInfoChange: (authStatus) => ({
    type: ActionType.AUTH_INFO_CHANGE,
    payload: authStatus,
  }),
};

const Operation = {
  authCheck: () => (dispatch, getState, api) => {
    return api.get(`/login`)
    .then(() => {
      dispatch(ActionCreator.authStatusChange(AuthorizationStatus.AUTH));
    }).catch((err) => {
      throw err;
    });
  },
  userLogin: (userData) => (dispatch, getState, api) => {
    return api.post(`/login`, userData)
    .then((response) => {
      dispatch(ActionCreator.authInfoChange(createAuth(response.data)));
      dispatch(ActionCreator.authStatusChange(AuthorizationStatus.AUTH));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_STATUS_CHANGE:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.AUTH_INFO_CHANGE:
      return extend(state, {authInfo: action.payload});
  }
  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
