import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Favorites} from "./favorites.jsx";
import {offers, testStore} from "../../data-test.js";
import history from "../../history.js";

const mockStore = configureStore([]);

it(`Render Favorites`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <Favorites
            favoritesOffers={offers}
            favoritesCities={[offers[0].city.name, offers[1].city.name]}
          />
        </Provider>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
