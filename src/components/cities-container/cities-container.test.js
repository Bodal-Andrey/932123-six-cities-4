import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import offers from "../../data-test.js";
import CitiesContainer from "./cities-container.jsx";

const mockStore = configureStore([]);

it(`CitiesContainer test`, () => {
  const store = mockStore({
    offers,
    city: offers[0].city.name,
    cities: Array.from(new Set(offers.map((item) => item.city.name))),
    sortType: `popular`,
    aciveOfferId: null,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <CitiesContainer
          city={`Brussels`}
          activeOffers={offers}
          onChangeScreen={() => {}}
          activeItemId={1}
          onActiveItemChange={() => {}}
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
