import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from "./card.jsx";
import offers from "../../data-test.js";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should link to city be pressed`, () => {
  const onCardClick = jest.fn();

  const cardComponent = shallow(
      <Card
        offer={offers[0]}
        onCardClick={onCardClick}
      />
  );

  const cardName = cardComponent.find(`.place-card__name`);

  cardName.simulate(`click`);

  expect(onCardClick).toHaveBeenCalledWidth(offers[0].id);
});
