import NameSpace from "../name-space.js";

const getSortType = (state) => {
  return state[NameSpace.APP].sortType;
};

const getActiveOfferId = (state) => {
  return state[NameSpace.APP].activeOfferId;
};

export {getSortType, getActiveOfferId};
