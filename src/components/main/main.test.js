import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Main} from "./main.jsx";
import NameSpace from "../../reducer/name-space.js";
import {offers} from "../../data-test.js";
import {AuthorizationStatus} from "../../const.js";

const mockStore = configureStore([]);

it(`Main component test`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers,
      city: offers[0].city.name,
      activeItemId: -1,
      reviews: [],
    },
    [NameSpace.APP]: {
      sortType: `popular`,
      showAuthPage: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authInfo: {
        avatarUrl: ``,
        name: ``,
        id: null,
        isPro: null,
        email: ``,
      },
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          city={`Brussels`}
          cities={[`Amsterdam`, `Paris`, `Brussels`, `Hamburg`]}
          activeOffers={offers}
          onChangeScreen={() => {}}
          activeItemId={-1}
          onActiveItemChange={() => {}}
          onCityButtonClick={() => {}}
          sortType={`popular`}
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
