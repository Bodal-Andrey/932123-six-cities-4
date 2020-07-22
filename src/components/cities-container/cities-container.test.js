import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {offers} from "../../data-test.js";
import CitiesContainer from "./cities-container.jsx";
import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

it(`CitiesContainer test`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      sortType: `popular`,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <CitiesContainer
          city={`Brussels`}
          activeOffers={offers}
          onChangeScreen={() => {}}
          activeItemId={1}
          onActiveItemChange={() => {}}
          sortType={`popular`}
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
