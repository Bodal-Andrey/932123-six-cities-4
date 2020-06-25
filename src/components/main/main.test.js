import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import offers from "../../data-test.js";

it(`Main component test`, () => {
  const tree = renderer.create(
      <Main
        offersCount={100}
        offers={offers}
        onChangeScreen={() => {}}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
