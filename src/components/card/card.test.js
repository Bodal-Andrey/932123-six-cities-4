import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";
import {Offers} from "../../data.js";

it(`Test Card with first offer name`, () => {
  const tree = renderer.create(
      <Card
        name={Offers.OFFER_NAMES[0]}
        onCardNameClick={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
