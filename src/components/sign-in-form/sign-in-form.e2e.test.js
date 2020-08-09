import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignInForm from "./sign-in-form.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Test SignInForm component items clicks and return value`, () => {
  const onUserLogin = jest.fn();

  const SignInFormExample = shallow(
      <SignInForm
        onSubmit={onUserLogin}
        emailRef={{}}
        passwordRef={{}}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  );

  const signForm = SignInFormExample.find(`.form`);

  signForm.simulate(`submit`, {
    preventDefault: () => {}
  });

  expect(onUserLogin).toHaveBeenCalledTimes(1);
});
