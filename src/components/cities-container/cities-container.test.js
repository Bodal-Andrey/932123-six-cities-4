import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {offers, testStore} from "../../data-test.js";
import {CitiesContainer} from "./cities-container.jsx";
import history from "../../history.js";

const mockStore = configureStore([]);

it(`CitiesContainer test`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <CitiesContainer
            city={`Brussels`}
            activeOffers={offers}
            activeItemId={1}
            onActiveItemChange={() => {}}
            sortedActiveOffers={offers}
          />
        </Provider>
      </Router>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
