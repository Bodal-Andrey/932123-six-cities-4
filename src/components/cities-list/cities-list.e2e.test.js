import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CitiesList from "./cities-list.jsx";
import offers from "../../data-test.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

it(`Should CitiesList item to be pressed`, () => {
  const onCityButtonClick = jest.fn();
  const store = mockStore({
    offers,
    city: offers[0].city.name,
    cities: Array.from(new Set(offers.map((item) => item.city.name)))
  });

  const citiesList = shallow(
      <Provider store={store}>
        <CitiesList
          cities={[`Amsterdam`, `Paris`, `Brussels`, `Hamburg`]}
          city={`Amsterdam`}
          onCityButtonClick={onCityButtonClick}
        />
      </Provider>
  );

  const cityButton = citiesList.find(`locations__item-link`);
  cityButton.simulate(`click`);

  expect(onCityButtonClick).toHaveBeenCalledWith(offers[0].city.name);
});
