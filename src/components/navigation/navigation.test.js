import React from "react";
import renderer from "react-test-renderer";
import {Navigation} from "./navigation.jsx";

const AuthInfo = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

it(`Render Navigation`, () => {
  const tree = renderer
  .create(
      <Navigation
        onChangeAuthState={() => {}}
        authStatus={`AUTH`}
        authInfo={AuthInfo}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
