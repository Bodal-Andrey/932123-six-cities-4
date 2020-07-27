import {extend} from "../../utils.js";
import {SortingTypes} from "../../const.js";

const initialState = {
  sortType: SortingTypes.POPULAR,
  showAuthPage: false,
};

const ActionType = {
  SORT_CHANGE: `SORT_CHANGE`,
  AUTH_STATE_CHANGE: `AUTH_STATE_CHANGE`,
};

const ActionCreator = {
  sortChange: (sortType) => ({
    type: ActionType.SORT_CHANGE,
    payload: sortType,
  }),
  authStateChange: (state) => ({
    type: ActionType.AUTH_STATE_CHANGE,
    payload: state,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORT_CHANGE:
      return extend(state, {sortType: action.payload});
    case ActionType.AUTH_STATE_CHANGE:
      return extend(state, {showAuthPage: action.payload});
  }
  return state;
};

export {ActionType, ActionCreator, reducer};
