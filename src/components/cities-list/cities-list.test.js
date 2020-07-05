import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CitiesList from "./cities-list.jsx";
import offers from "../../data-test.js";

const mockStore = configureStore([]);

it(`Render CitiesList`, () => {
  const store = mockStore({
    offers,
    city: offers[0].city.name,
    cities: Array.from(new Set(offers.map((item) => item.city.name)))
  });

  const tree = renderer.create(
      <Provider store={store}>
        <CitiesList
          cities={[`Amsterdam`, `Paris`, `Brussels`, `Hamburg`]}
          city={`Amsterdam`}
          onCityButtonClick={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
