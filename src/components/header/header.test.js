import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import Header from "./header.jsx";
import {testStore} from "../../data-test.js";
import history from "../../history.js";


const mockStore = configureStore([]);

it(`Render Header`, () => {
  const store = mockStore(testStore);

  const tree = renderer
  .create(
      <Provider store={store}>
        <Router history={history}>
          <Header isLogoActive={false} />
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
