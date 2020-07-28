import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";
import NameSpace from "../../reducer/name-space.js";
import {offers} from "../../data-test.js";

const mockStore = configureStore([]);

it(`Test component SignIn`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers,
      city: offers[0].city.name,
      activeOfferId: -1,
      reviews: [],
    },
    [NameSpace.APP]: {
      sortType: `popular`,
      showAuthPage: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authInfo: {
        avatarUrl: ``,
        name: ``,
        id: null,
        isPro: null,
        email: ``,
      }
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <SignIn
          onUzerAuthorization={() => {}}
          onChangeActiveOfferId={() => {}}
          onChangeAuthState={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
