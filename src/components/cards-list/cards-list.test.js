import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import CardsList from "./cards-list.jsx";
import {offers, testStore} from "../../data-test.js";
import {CardType} from "../../const.js";
import history from "../../history.js";

const mockStore = configureStore([]);

it(`CardsList component test`, () => {
  const store = mockStore(testStore);

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <CardsList
            offers={offers}
            onActiveItemChange={() => {}}
            cardType={CardType.MAIN}
          />
        </Provider>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
