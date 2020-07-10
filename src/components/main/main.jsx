import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CardsList from "../cards-list/cards-list.jsx";
import Map from "../map/map.jsx";
import {CardsClass} from "../../const.js";
import CitiesList from "../cities-list/cities-list.jsx";
import SortingOptions from '../sorting-options/sorting-options.jsx';
import {sortingOffers} from "../../utils.js";

const Main = (props) => {
  const {onChangeScreen, city, activeOffers, activeOfferId} = props;

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{activeOffers.length} places to stay in {city}</b>
                <SortingOptions />
                <CardsList offers={activeOffers} onChangeScreen={onChangeScreen} cardsClass={CardsClass.CITIES} />
              </section>
              <div className="cities__right-section">
                <Map offers={activeOffers} city={activeOffers[0].city.coordinates} activeOfferId={activeOfferId} className={`cities__map map`} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  onChangeScreen: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  activeOffers: PropTypes.array.isRequired,
  activeOfferId: PropTypes.any,
};

const mapStateToProps = (state) => {
  const filteredOffers = state.offers.filter((item) => item.city.name === state.city);

  return {
    activeOffers: sortingOffers(filteredOffers, state.sortType),
    city: state.city,
    activeOfferId: state.activeOfferId,
  };
};

export {Main};

export default connect(mapStateToProps, null)(Main);
