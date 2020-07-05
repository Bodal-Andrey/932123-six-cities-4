import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities, selectedCity, onCityButtonClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => {
        return (
          <li key={item} className="locations__item">
            <a onClick={() => onCityButtonClick(item)} className={`locations__item-link tabs__item ${item === selectedCity ? `tabs__item--active` : ``}`} href="#">
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
  selectedCity: PropTypes.string.isRequired,
  onCityButtonClick: PropTypes.func.isRequired,
};

export default CitiesList;
