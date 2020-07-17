import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from "./card.jsx";
import offers from "../../data-test.js";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Mouse testing on the Card`, () => {
  it(`Should link to city be pressed`, () => {
    const onChangeScreen = jest.fn();
    const onActiveItemChange = jest.fn();

    const cardComponent = shallow(
        <Card
          offer={offers[0]}
          onChangeScreen={onChangeScreen}
          cardsClass={`cities`}
          onActiveItemChange={onActiveItemChange}
        />
    );

    cardComponent.props().onMouseEnter();

    expect(onActiveItemChange.mock.calls.length).toBe(1);
    expect(onActiveItemChange.mock.calls[0][0]).toBe(offers[0].id);

    const cardName = cardComponent.find(`.place-card__name a`);

    cardName.simulate(`click`);

    expect(onChangeScreen).toHaveBeenCalledWith(offers[0]);
  });

  it(`Should mouse out`, () => {
    const onChangeScreen = jest.fn();
    const onActiveItemChange = jest.fn();

    const cardComponent = shallow(
        <Card
          offer={offers[0]}
          onChangeScreen={onChangeScreen}
          cardsClass={`cities`}
          onActiveItemChange={onActiveItemChange}
        />
    );

    cardComponent.props().onMouseLeave();

    expect(onActiveItemChange.mock.calls.length).toBe(1);
    expect(onActiveItemChange.mock.calls[0][0]).toBe(-1);
  });
});
