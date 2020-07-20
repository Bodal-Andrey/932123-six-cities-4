import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from './reviews-list.jsx';

const reviews = [
  {
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 3,
    name: `Max`,
    date: `December 24, 2018`
  },
  {
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 4,
    name: `James`,
    date: `October 20, 2018`
  },
  {
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 5,
    name: `Ron`,
    date: `July 14, 2018`
  },
];

it(`Test ReviewsList`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviews}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
