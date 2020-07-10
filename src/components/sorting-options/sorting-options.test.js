import React from "react";
import renderer from "react-test-renderer";
import {SortingOptions} from "./sorting-options.jsx";

it(`Render SortingOptions`, () => {
  const tree = renderer.create(
      <SortingOptions
        sortType={`popular`}
        onSortItemClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
