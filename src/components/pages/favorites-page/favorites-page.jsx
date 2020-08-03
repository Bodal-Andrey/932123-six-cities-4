import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../../header/header.jsx";
import FavoritesEmpty from "../../favorites-empty/favorites-empty.jsx";
import Favorites from "../../favorites/favorites.jsx";
import {getFavoritesOffers, getFavoritesCities} from "../../../reducer/data/selectors.js";
import {Operation} from "../../../reducer/data/data.js";

const FavoritesPage = (favoritesOffers, favoritesCities, loadFavoriteOffers) => {
  loadFavoriteOffers();

  return (
    <div className={`page ${favoritesOffers.length ? `` : `page--favorites-empty`}`}>
      <Header isLogoActive={false} />
      <main className={`page__main page__main--favorites ${favoritesOffers.length ? `` : `page__main--favorites-empty`}`}>
        <div className="page__favorites-container container">
          {favoritesOffers.length ?
            <Favorites offers={favoritesOffers} cities={favoritesCities} /> :
            <FavoritesEmpty />
          }
        </div>
      </main>
      <footer className={`footer ${favoritesOffers.length ? `container` : ``}`}>
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  favoritesOffers: PropTypes.array.isRequired,
  favoritesCities: PropTypes.array.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    favoritesOffers: getFavoritesOffers(state),
    favoritesCities: getFavoritesCities(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(Operation.loadFavoriteOffers());
  }
});

export {FavoritesPage};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
