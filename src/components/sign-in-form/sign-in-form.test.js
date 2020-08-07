import React from "react";
import renderer from "react-test-renderer";
import SignInForm from "./sign-in-form.jsx";

it(`Render SignInForm`, () => {
  const tree = renderer
      .create(
          <SignInForm
            onSubmit={() => {}}
            emailRef={{}}
            passwordRef={{}}
          />,
          {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
