import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CitiesList from "../cities-list/cities-list.jsx";
import CitiesContainer from "../cities-container/cities-container.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import {sortingOffers} from "../../utils.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {ActionCreator} from '../../reducer.js';

const Main = (props) => {
  const {onChangeScreen, city, activeOffers, cities, onCityButtonClick, onActiveItemChange, activeItemId} = props;

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

        <main className={`page__main page__main--index ${activeOffers.length ? `` : `page__main--index-empty`}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList sourceActiveItemId={cities[0]} cities={cities} onCityButtonClick={onCityButtonClick} />
            </section>
          </div>
          <div className="cities">
            {activeOffers.length
              ?
              <CitiesContainer activeOffers={activeOffers} activeItemId={activeItemId} city={city} onChangeScreen={onChangeScreen} onActiveItemChange={onActiveItemChange} />
              :
              <MainEmpty />}
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
  activeItemId: PropTypes.any.isRequired,
  cities: PropTypes.array.isRequired,
  onCityButtonClick: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const filteredOffers = state.offers.filter((item) => item.city.name === state.city);

  return {
    activeOffers: filteredOffers ? sortingOffers(filteredOffers, state.sortType) : [],
    city: state.city,
    cities: state.cities,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityButtonClick(city) {
    dispatch(ActionCreator.cityChange(city));
  }
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(Main));
