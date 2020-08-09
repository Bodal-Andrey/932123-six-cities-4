import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {CitiesList} from "./cities-list.jsx";
import {testStore} from "../../data-test.js";

const mockStore = configureStore([]);

it(`Render CitiesList`, () => {
  const store = mockStore(testStore);

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
