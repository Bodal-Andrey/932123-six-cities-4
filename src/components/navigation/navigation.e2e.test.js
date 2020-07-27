import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Navigation} from "./navigation.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const AuthInfo = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

it(`Test Navigation component items clicks and return value`, () => {
  const onChangeAuthState = jest.fn();

  const sortingUsers = shallow(
      <Navigation
        onChangeAuthState={() => {}}
        authStatus={`AUTH`}
        authInfo={AuthInfo}
      />
  );

  const itemNavigation = sortingUsers.find(`.user a`);

  itemNavigation.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(onChangeAuthState).toHaveBeenCalledTimes(1);
  expect(onChangeAuthState).toHaveBeenCalledWith(true);
});
