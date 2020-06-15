import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Offers} from "../../mock.js";

it(`App component test`, () => {
  const tree = renderer.create(
      <App
        offersCount={Offers.OFFERS_COUNT}
        offerName={Offers.OFFER_NAMES}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
