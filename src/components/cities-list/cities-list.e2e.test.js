import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CitiesList} from "./cities-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should CitiesList item to be pressed`, () => {
  const onCityButtonClick = jest.fn();
  const onActiveItemChange = jest.fn();

  const citiesList = shallow(
      <CitiesList
        cities={[`Amsterdam`, `Paris`, `Brussels`, `Hamburg`]}
        activeItemId={`Paris`}
        onCityButtonClick={onCityButtonClick}
        onActiveItemChange={onActiveItemChange}
      />
  );

  const cityButton = citiesList.find(`a.locations__item-link`).at(2);
  cityButton.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(onCityButtonClick.mock.calls.length).toBe(1);
  expect(onCityButtonClick.mock.calls[0][1]).toBe(`Brussels`);

  expect(onActiveItemChange.mock.calls.length).toBe(1);
  expect(onActiveItemChange.mock.calls[0][1]).toBe(`Brussels`);
});
