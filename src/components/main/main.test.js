import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Offers} from "../../mock.js";

it(`Main component test`, () => {
  const tree = renderer.create(
      <Main
        offersCount={Offers.OFFERS_COUNT}
        offerName={Offers.OFFER_NAMES}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
