import React from "react";
import PropTypes from "prop-types";
import CardsList from "../cards-list/cards-list.jsx";
import {CardType} from "../../const.js";

const FavoritesCities = (offers, city) => {
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
          offers={offers.filter((item) => item.city.name === city)}
          onActiveItemChange={() => {}}
          cardType={CardType.FAVORITES}
        />
      </div>
    </li>
  );
};

FavoritesCities.PropTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

export default FavoritesCities;
