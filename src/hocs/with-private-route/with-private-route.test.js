import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import NameSpace from "../../reducer/name-space.js";
import history from "../../history.js";
import withPrivateRoute from "./with-private-route.js";

const mockStore = configureStore([]);

const MockComponent = () => <div />;
const MockComponentWrapped = withPrivateRoute(`AUTH`, MockComponent, `/login`);

it(`Render withAuthRoute wrapped component renders correct`, () => {
  const store = mockStore({[NameSpace.USER]: {authorizationStatus: `AUTH`}});
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <MockComponentWrapped />
          </Provider>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
