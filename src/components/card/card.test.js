import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Card} from "./card.jsx";
import {offers} from "../../data-test.js";
import {CardType} from "../../const.js";
import history from "../../history.js";

it(`Test Card with first offer name`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Card
          offer={offers[0]}
          onActiveItemChange={() => {}}
          onFavoriteToggle= {() => {}}
          cardType={CardType.MAIN}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
