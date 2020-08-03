import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {RoomPage} from "./room-page.jsx";
import {offers, reviews, testStore} from "../../../data-test.js";
import history from "../../../history.js";

const mockStore = configureStore([]);

it(`Render RoomPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <RoomPage
            offer={offers[0]}
            nearbyOffers={offers}
            reviews={reviews}
            isNearbyOffersLoading={false}
            isReviewsLoading={false}
            isAuthorizedUser={true}
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
