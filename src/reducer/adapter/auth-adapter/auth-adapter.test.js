import createAuth from "./auth-adapter.js";

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

it(`Should createAuth work correct`, () => {
  expect(createAuth(AuthInfoInitial)).toEqual(AuthInfo);
});
