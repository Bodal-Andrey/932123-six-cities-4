import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import CardsList from "./cards-list.jsx";
import {offers, testStore} from "../../data-test.js";

const mockStore = configureStore([]);

it(`CardsList component test`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Provider store={store}>
        <CardsList
          offers={offers}
          cardsClass={`cities`}
          onActiveItemChange={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
