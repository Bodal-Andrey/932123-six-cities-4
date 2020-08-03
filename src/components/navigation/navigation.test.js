import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import {Navigation} from "./navigation.jsx";
import history from "../../history.js";

const AuthInfo = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

it(`Render Navigation when AUTH`, () => {
  const tree = renderer
  .create(
      <Router history={history}>
        <Navigation
          authStatus={`AUTH`}
          authInfo={AuthInfo}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Render Navigation when NO_AUTH`, () => {
  const tree = renderer
  .create(
      <Router history={history}>
        <Navigation
          authStatus={`NO_AUTH`}
          authInfo={AuthInfo}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
