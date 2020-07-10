import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from "./card.jsx";
import offers from "../../data-test.js";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should link to city be pressed, mouse hover or mouse leave`, () => {
  const onChangeScreen = jest.fn();
  const onCardMouseHover = jest.fn();

  const cardComponent = shallow(
      <Card
        offer={offers[0]}
        onChangeScreen={onChangeScreen}
        cardsClass={`cities`}
        onCardMouseHover={onCardMouseHover}
      />
  );

  cardComponent.props().onMouseHover();

  expect(onCardMouseHover.mock.calls.length).toBe(1);
  expect(onCardMouseHover.mock.calls[0][0]).toBe(offers[0].id);

  const cardName = cardComponent.find(`.place-card__name a`);

  cardName.simulate(`click`);

  expect(onChangeScreen).toHaveBeenCalledWith(offers[0]);
});
