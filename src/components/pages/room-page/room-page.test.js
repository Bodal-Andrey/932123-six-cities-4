import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {RoomPage} from "./room-page.jsx";
import {offers, testStore} from "../../../data-test.js";
import history from "../../../history.js";

const mockStore = configureStore([]);

it(`Render RoomPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <RoomPage
            match={{params: {id: `1`}}}
            offer={offers[0]}
            reviews={[]}
            nearbyOffers={offers}
            isAuthorizedUser={`AUTH`}
            loadReviews={() => {}}
            loadNearbyOffers={() => {}}
            onFavoritesToggle={() => {}}
            loadOfferData={() => {}}
          />
        </Router>
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
