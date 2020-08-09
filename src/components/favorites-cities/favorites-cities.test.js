import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import FavoritesCities from "./favorites-cities.jsx";
import {offers, testStore} from "../../data-test.js";
import history from "../../history.js";

const mockStore = configureStore([]);

it(`Render FavoritesCities`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <FavoritesCities
            offers={offers}
            city={offers[0].city.name}
          />
        </Provider>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
