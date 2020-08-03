import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Favorites from "./favorites.jsx";
import {offers, testStore} from "../../data-test.js";

const mockStore = configureStore([]);

it(`Render Favorites`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Favorites
          offers={offers}
          cities={[offers[0].city.name, offers[1].city.name]}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
