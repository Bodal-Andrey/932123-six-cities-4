import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";
import {Offers} from "../../mock.js";

describe(`Test Card component`, () => {
  it(`Test Card with first offer name`, () => {
    const tree = renderer.create(
        <Card
          name={Offers.OFFER_NAMES[0]}
          onCardNameClick={() => {}}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Test Card with second offer name`, () => {
    const tree = renderer.create(
        <Card
          name={Offers.OFFER_NAMES[1]}
          onCardNameClick={() => {}}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Test Card with third offer name`, () => {
    const tree = renderer.create(
        <Card
          name={Offers.OFFER_NAMES[2]}
          onCardNameClick={() => {}}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Test Card with fourth offer name`, () => {
    const tree = renderer.create(
        <Card
          name={Offers.OFFER_NAMES[3]}
          onCardNameClick={() => {}}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
