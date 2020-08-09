import React from "react";
import PropTypes from "prop-types";
import CardsList from "../cards-list/cards-list.jsx";
import {CardType} from "../../const.js";

const FavoritesCities = (props) => {
  const {offers, city} = props;

  return (
    <li key={city} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <CardsList
          offers={offers}
          onActiveItemChange={() => {}}
          cardType={CardType.FAVORITES}
        />
      </div>
    </li>
  );
};

FavoritesCities.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

export default FavoritesCities;
