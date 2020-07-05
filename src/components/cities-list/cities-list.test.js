import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";

it(`Render CitiesList`, () => {
  const tree = renderer.create(
      <CitiesList
        cities={[`Amsterdam`, `Brussels`, `Hamburg`]}
        city={`Brussels`}
        onCityButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
