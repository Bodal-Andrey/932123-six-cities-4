import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Header from "./header.jsx";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../const.js";
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

it(`Render Header`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authInfo: {
        avatarUrl: ``,
        name: ``,
        id: null,
        isPro: null,
        email: ``,
      }
    }
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <Header isLogoActive={false} />
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
