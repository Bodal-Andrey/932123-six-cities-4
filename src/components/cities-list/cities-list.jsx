import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const CitiesList = (props) => {
  const {cities, city, onCityButtonClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => {
        return (
          <li key={item} className="locations__item">
            <a onClick={(evt) => onCityButtonClick(evt, item)} className={`locations__item-link tabs__item ${item === city ? `tabs__item--active` : ``}`} href="#">
              <span>{item}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onCityButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCityButtonClick(evt, city) {
    evt.preventDefault();
    dispatch(ActionCreator.cityChange(city));
  }
});

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    offers: state.offers,
    city: state.city,
  };
};

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
