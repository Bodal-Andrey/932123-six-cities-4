import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import InfoAboutOffer from "./info-about-offer.jsx";
import NameSpace from "../../reducer/name-space.js";
import {offers, reviews} from "../../data-test.js";

const mockStore = configureStore([]);

it(`Render InfoAboutOffer`, () => {
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
        <InfoAboutOffer
          offer={offers[0]}
          onChangeScreen = {() => {}}
          nearbyOffers={offers}
          reviews={reviews}
          isNearbyOffersLoading={false}
          isReviewsLoading={false}
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
