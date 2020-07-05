import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import offers from "../../data-test.js";

const mockStore = configureStore([]);

it(`App component test`, () => {
  const store = mockStore({
    offers,
    city: offers[0].city.name,
    cities: Array.from(new Set(offers.map((item) => item.city.name)))
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
