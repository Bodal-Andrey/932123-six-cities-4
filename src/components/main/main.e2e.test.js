import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main.jsx";
import {Offers} from "../../mock.js";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should link to city be pressed`, () => {
  const onMainLinkClick = jest.fn();

  const main = shallow(
      <Main
        offersCount={Offers.OFFERS_COUNT}
        offerName={Offers.OFFER_NAMES}
        onMainLinkClick={onMainLinkClick}
      />
  );

  const mainLinkToCity = main.find(`a.locations__item-link`);

  mainLinkToCity.props().onClick();

  expect(onMainLinkClick.mock.calls.length).toBe(1);
});
