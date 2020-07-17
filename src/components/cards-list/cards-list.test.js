import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import CardsList from "./cards-list.jsx";
import offers from "../../data-test.js";

const mockStore = configureStore([]);

it(`CardsList component test`, () => {
  const store = mockStore({
    offers,
    city: offers[0].city.name,
    cities: Array.from(new Set(offers.map((item) => item.city.name))),
    sortType: `popular`,
    activeOfferId: null,
  });
  const tree = renderer.create(
      <Provider store={store}>
        <CardsList
          offers={offers}
          onChangeScreen={() => {}}
          cardsClass={`cities`}
          onActiveItemChange={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
