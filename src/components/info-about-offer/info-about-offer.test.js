import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import InfoAboutOffer from "./info-about-offer.jsx";
import offers from "../../data-test.js";

const mockStore = configureStore([]);

it(`Render InfoAboutOffer`, () => {
  const store = mockStore({
    offers,
    city: offers[0].city.name,
    cities: Array.from(new Set(offers.map((item) => item.city.name))),
    sortType: `popular`,
    aciveOfferId: null,
  });
  const tree = renderer.create(
      <Provider store={store}>
        <InfoAboutOffer
          offer={offers[0]}
          onChangeScreen = {() => {}}
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
