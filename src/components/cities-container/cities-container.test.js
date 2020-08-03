import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {offers, testStore} from "../../data-test.js";
import {CitiesContainer} from "./cities-container.jsx";

const mockStore = configureStore([]);

it(`CitiesContainer test`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Provider store={store}>
        <CitiesContainer
          city={`Brussels`}
          activeOffers={offers}
          activeItemId={1}
          onActiveItemChange={() => {}}
          sortType={`popular`}
        />
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
