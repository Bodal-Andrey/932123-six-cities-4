import React from "react";
import PropTypes from "prop-types";


class CitiesList extends React.PureComponent {
  render() {
    const {cities, onCityButtonClick, activeItemId, onActiveItemChange} = this.props;
    const city = activeItemId;

    return (
      <ul className="locations__list tabs__list">
        {cities.map((item) => {
          return (
            <li key={item} className="locations__item">
              <a onClick={(evt) => {
                evt.preventDefault();
                onCityButtonClick(evt, item);
                onActiveItemChange(item);
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
  activeItemId: PropTypes.any.isRequired,
  onCityButtonClick: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default CitiesList;
