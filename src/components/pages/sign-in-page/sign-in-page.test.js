import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {SignInPage} from "./sign-in-page.jsx";
import {testStore} from "../../../data-test.js";
import history from "../../../history.js";

const mockStore = configureStore([]);

it(`Test component SignInPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <SignInPage
            onUzerAuthorization={() => {}}
            loadFavoriteOffers={() => {}}
            onActiveItemChange={() => {}}
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
