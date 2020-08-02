import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CitiesList from "../../cities-list/cities-list.jsx";
import CitiesContainer from "../../cities-container/cities-container.jsx";
import MainEmpty from "../../main-empty/main-empty.jsx";
import withActiveItem from "../../../hocs/with-active-item/with-active-item.js";
import {ActionCreator} from '../../../reducer/data/data.js';
import {getSortType} from "../../../reducer/app/selectors.js";
import {getCity, getFilteredOffers, getCities} from "../../../reducer/data/selectors.js";
import Header from "../../header/header.jsx";

const Main = (props) => {
  const {city, activeOffers, cities, onCityButtonClick, onActiveItemChange, activeItemId, sortType, onChangeActiveOfferId} = props;

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header isLogoActive={true} />
        <main className={`page__main page__main--index ${activeOffers.length ? `` : `page__main--index-empty`}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList
                cities={cities}
                city={city}
                onCityButtonClick={onCityButtonClick}
              />
            </section>
          </div>
          <div className="cities">
            {activeOffers.length
              ?
              <CitiesContainer
                activeOffers={activeOffers}
                activeItemId={activeItemId}
                city={city}
                onChangeScreen={onChangeActiveOfferId}
                onActiveItemChange={onActiveItemChange}
                sortType={sortType}
              />
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
  sortType: PropTypes.string.isRequired,
  onChangeActiveOfferId: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeOffers: getFilteredOffers(state),
    city: getCity(state),
    cities: getCities(state),
    sortType: getSortType(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityButtonClick(city) {
    dispatch(ActionCreator.cityChange(city));
  },
  onChangeActiveOfferId(id) {
    dispatch(ActionCreator.activeOfferIdChange(id));
  }
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(Main));
