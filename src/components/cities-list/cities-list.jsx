import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { getCity, getCities } from "../../reducer/data/selectors.js";
import {ActionCreator} from "../../reducer/data/data.js";

class CitiesList extends React.PureComponent {
  render() {
    const {cities, city, onCityButtonClick} = this.props;

    return (
      <ul className="locations__list tabs__list">
        {cities.map((item) => {
          return (
            <li key={item} className="locations__item">
              <a onClick={(evt) => {
                evt.preventDefault();
                onCityButtonClick(item);
              }}
              className={`locations__item-link tabs__item ${item === city ? `tabs__item--active` : ``}`} href="#">
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onCityButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    city: getCity(state),
    cities: getCities(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityButtonClick(city) {
    dispatch(ActionCreator.cityChange(city));
  }
});

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
