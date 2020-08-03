import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import FavoritesPage from "./favorites-page.jsx";
import {offers, testStore} from "../../data-test.js";
import history from "../../../history.js";

const mockStore = configureStore([]);

it(`Render CitiesList`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesPage
            favoritesOffers={offers}
            favoritesCities={[offers[0].city.name, offers[1].city.name]}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
