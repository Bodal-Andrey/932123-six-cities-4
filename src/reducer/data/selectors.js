import NameSpace from "../name-space.js";

const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

const getCity = (state) => {
  return state[NameSpace.DATA].city;
};

export {getOffers, getCity};
