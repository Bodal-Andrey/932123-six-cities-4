import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from "./card.jsx";
import {offers} from "../../data-test.js";
import {CardType} from "../../const.js";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Mouse testing on the Card`, () => {
  const onActiveItemChange = jest.fn();
  const onFavoriteToggle = jest.fn();

  const cardComponent = shallow(
      <Card
        offer={offers[0]}
        onActiveItemChange={onActiveItemChange}
        onFavoriteToggle={onFavoriteToggle}
        cardType={CardType.MAIN}
      />
  );

  const cardBookmark = cardComponent.find(`.place-card__bookmark-button`);

  it(`Should bookmark button registered`, () => {
    cardBookmark.props().onClick();

    expect(onFavoriteToggle.mock.calls.length).toBe(1);
    expect(onFavoriteToggle.mock.calls[0][0]).toBe(offers[0].id, !offers[0].isFavorite);
  });

  it(`Should mouse enter registered`, () => {
    cardComponent.props().onMouseEnter();

    expect(onActiveItemChange.mock.calls.length).toBe(1);
    expect(onActiveItemChange.mock.calls[0][0]).toBe(offers[0].id);
  });

  it(`Should mouse leave registered`, () => {
    cardComponent.props().onMouseLeave();

    expect(onActiveItemChange.mock.calls.length).toBe(2);
    expect(onActiveItemChange.mock.calls[1][0]).toBe(-1);
  });
});
