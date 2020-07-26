import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";

it(`Test component SignIn`, () => {
  const tree = renderer.create(
      <SignIn
        onUzerAuthorization={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
