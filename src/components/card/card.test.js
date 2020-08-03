import React from "react";
import renderer from "react-test-renderer";
import {Card} from "./card.jsx";
import {offers} from "../../data-test.js";
import {CardType} from "../../const.js";

it(`Test Card with first offer name`, () => {
  const tree = renderer.create(
      <Card
        offer={offers[0]}
        onActiveItemChange={() => {}}
        onFavotiteToggle= {() => {}}
        cardType={CardType.MAIN}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
