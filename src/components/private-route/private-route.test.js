import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../const.js";
import {PrivateRoute} from "./private-route.jsx";
import history from "../../history.js";

it(`PrivateRoute render correct`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PrivateRoute
            path={AppRoute.FAVORITES}
            exact
            render={() => {
              return (<h1>I love you!</h1>);
            }}
            authStatus={AuthorizationStatus.AUTH}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
