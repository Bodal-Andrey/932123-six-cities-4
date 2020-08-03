import React from "react";
import PropTypes from "prop-types";
import FavoritesCities from "../favorites-cities/favorites-cities.jsx";

const Favorites = (offers, cities) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => <FavoritesCities key={city} offers={offers} city={city} />)}
      </ul>
    </section>
  );
};

Favorites.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
};

export default Favorites;
