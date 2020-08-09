import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SortingOptions from "../sorting-options/sorting-options.jsx";
import CardsList from "../cards-list/cards-list.jsx";
import Map from "../map/map.jsx";
import {CardType} from "../../const.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {getFilteredOffers, getCity, getSortedFilteredOffers} from "../../reducer/data/selectors.js";

const CitiesContainer = (props) => {
  const {activeOffers, activeItemId, city, onActiveItemChange, sortedActiveOffers} = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{activeOffers.length} places to stay in {city}</b>
        <SortingOptions />
        <div className="cities__places-list places__list tabs__content">
          <CardsList
            offers={sortedActiveOffers}
            onActiveItemChange={onActiveItemChange}
            cardType={CardType.MAIN}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          offers={activeOffers}
          city={activeOffers[0].city.coordinates}
          activeOfferId={activeItemId}
          zoom={activeOffers[0].city.zoom}
          className={`cities__map map`}
        />
      </div>
    </div>
  );
};

CitiesContainer.propTypes = {
  activeOffers: PropTypes.array.isRequired,
  activeItemId: PropTypes.any,
  city: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  sortedActiveOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    city: getCity(state),
    activeOffers: getFilteredOffers(state),
    sortedActiveOffers: getSortedFilteredOffers(state),
  };
};

export {CitiesContainer};

export default connect(mapStateToProps, null)(withActiveItem(CitiesContainer));
