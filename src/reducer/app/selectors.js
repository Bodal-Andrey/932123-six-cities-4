import NameSpace from "../name-space.js";

const getSortType = (state) => {
  return state[NameSpace.APP].sortType;
};

const getShowAuthPage = (state) => {
  return state[NameSpace.APP].showAuthPage;
};

export {getSortType, getShowAuthPage};
