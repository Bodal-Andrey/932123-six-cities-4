import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from './reviews-list.jsx';

const reviews = [
  {
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2018-05-10`,
    id: 1,
    rating: 3,
    user: {
      id: 1,
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      isPro: false
    },
  },
];

it(`Test ReviewsList`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviews}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
