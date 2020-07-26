import {extend} from "../../utils.js";
import {SortingTypes} from "../../const.js";

const initialState = {
  sortType: SortingTypes.POPULAR,
  activeOfferId: -1,
};

const ActionType = {
  SORT_CHANGE: `SORT_CHANGE`,
  ACTIVE_OFFER_ID_CHANGE: `ACTIVE_OFFER_ID_CHANGE`,
};

const ActionCreator = {
  sortChange: (sortType) => ({
    type: ActionType.SORT_CHANGE,
    payload: sortType,
  }),
  activeOfferIdChange: (id) => ({
    type: ActionType.ACTIVE_OFFER_ID_CHANGE,
    payload: id,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORT_CHANGE:
      return extend(state, {sortType: action.payload});
    case ActionType.ACTIVE_OFFER_ID_CHANGE:
      return extend(state, {activeOfferId: action.payload});
  }
  return state;
};

export {ActionType, ActionCreator, reducer};
