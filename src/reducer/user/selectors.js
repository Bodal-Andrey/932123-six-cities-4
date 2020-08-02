import NameSpace from "../name-space.js";

const getAuthStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

const getAuthInfo = (state) => {
  return state[NameSpace.USER].authInfo;
};

export {getAuthStatus, getAuthInfo};
