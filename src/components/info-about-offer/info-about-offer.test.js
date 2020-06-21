import React from "react";
import renderer from "react-test-renderer";
import InfoAboutOffer from "./info-about-offer.jsx";
import offers from "../../data-test.js";

it(`Render InfoAboutOffer`, () => {
  const tree = renderer.create(<InfoAboutOffer offer={offers[0]} />).toJSON();

  expect(tree).toMatchSnapshot();
});
