import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from "./card.jsx";
import offers from "../../data-test.js";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should link to city be pressed`, () => {
  const onChangeScreen = jest.fn();

  const cardComponent = shallow(
      <Card
        offer={offers[0]}
        onChangeScreen={onChangeScreen}
      />
  );

  const cardName = cardComponent.find(`.place-card__name`);

  cardName.simulate(`click`);

  expect(onChangeScreen).toHaveBeenCalledWith(offers[0].id);
});
