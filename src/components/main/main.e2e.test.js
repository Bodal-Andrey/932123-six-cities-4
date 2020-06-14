import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main.jsx";
import {Offers} from "../../mock.js";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should link to city be pressed`, () => {
  const onCardNameClick = jest.fn();

  const main = shallow(
      <Main
        offersCount={Offers.OFFERS_COUNT}
        offerName={Offers.OFFER_NAMES}
        onCardNameClick={onCardNameClick}
      />
  );

  const cardName = main.find(`place-card__name`);

  cardName.simulate(`click`);

  expect(onCardNameClick).toHaveBeenCalledTimes(1);
});
