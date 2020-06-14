import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";
import {Offers} from "../../mock.js";

it(`CardsList component test`, () => {
  const tree = renderer.create(
      <CardsList
        offerName={Offers.OFFER_NAMES}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

