import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import offers from "../../data-test.js";

it(`Map component test`, () => {
  const tree = renderer.create(
      <Map
        offers={offers}
        city={offers[1].coordinates}
        offerId={offers[1].id}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
