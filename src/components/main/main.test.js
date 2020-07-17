import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Main} from "./main.jsx";
import offers from "../../data-test.js";

const mockStore = configureStore([]);

it(`Main component test`, () => {
  const store = mockStore({
    offers,
    city: offers[0].city.name,
    cities: Array.from(new Set(offers.map((item) => item.city.name))),
    sortType: `popular`,
    aciveOfferId: null,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          city={`Brussels`}
          cities={[`Amsterdam`, `Paris`, `Brussels`, `Hamburg`]}
          activeOffers={offers}
          onChangeScreen={() => {}}
          activeItemId={-1}
          onActiveItemChange={() => {}}
          onCityButtonClick={() => {}}
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
