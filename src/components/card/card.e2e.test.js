import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from "./card.jsx";
import {Offers} from "../../mock.js";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should link to city be pressed`, () => {
  const onCardNameClick = jest.fn();

  const cardComponent = shallow(
      <Card
        name={Offers.OFFER_NAMES[1]}
        onCardNameClick={onCardNameClick}
      />
  );

  const cardName = cardComponent.find(`.place-card__name`);

  cardName.simulate(`click`);

  expect(onCardNameClick).toBeCalledTimes(1);
});
