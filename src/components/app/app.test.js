import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {offers} from "../../data-test.js";
import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

it(`App component test`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers,
      city: offers[0].city.name,
    },
    [NameSpace.APP]: {
      sortType: `popular`,
      activeOfferId: -1,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
