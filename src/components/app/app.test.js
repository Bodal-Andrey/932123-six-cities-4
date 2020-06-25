import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import offers from "../../data-test.js";

it(`App component test`, () => {
  const tree = renderer.create(
      <App
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
