import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FavoritesCities from "../favorites-cities/favorites-cities.jsx";
import {getFavoritesOffers, getFavoritesCities} from "../../reducer/data/selectors.js";

const Favorites = (props) => {
  const {favoritesOffers, favoritesCities} = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesCities.map((city) =>
          <FavoritesCities
            key={city}
            offers={favoritesOffers.filter((item) => item.city.name === city)}
            city={city}
          />)}
      </ul>
    </section>
  );
};

Favorites.propTypes = {
  favoritesOffers: PropTypes.array.isRequired,
  favoritesCities: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    favoritesOffers: getFavoritesOffers(state),
    favoritesCities: getFavoritesCities(state),
  };
};

export {Favorites};

export default connect(mapStateToProps, null)(Favorites);
