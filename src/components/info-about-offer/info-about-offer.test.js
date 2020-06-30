import React from "react";
import renderer from "react-test-renderer";
import InfoAboutOffer from "./info-about-offer.jsx";
import offers from "../../data-test.js";

it(`Render InfoAboutOffer`, () => {
  const tree = renderer.create(
      <InfoAboutOffer
        offers={offers}
        offerId={1}
        onChangeScreen = {() => {}}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
