import React from "react";
import PropTypes from "prop-types";
import SortingOptions from "../sorting-options/sorting-options.jsx";
import CardsList from "../cards-list/cards-list.jsx";
import Map from "../map/map.jsx";
import {CardsClass, SortingTypes} from "../../const.js";
import {sortingOffers} from "../../utils.js";

const CitiesContainer = (props) => {
  const {activeOffers, activeItemId, city, onChangeScreen, onActiveItemChange, sortType} = props;
  const sortedOffers = sortingOffers(activeOffers, sortType);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{activeOffers.length} places to stay in {city}</b>
        <SortingOptions />
        <CardsList offers={sortedOffers} onChangeScreen={onChangeScreen} cardsClass={CardsClass.CITIES} onActiveItemChange={onActiveItemChange} />
      </section>
      <div className="cities__right-section">
        <Map offers={activeOffers} city={activeOffers[0].city.coordinates} activeOfferId={activeItemId} zoom={activeOffers[0].city.zoom} className={`cities__map map`} />
      </div>
    </div>
  );
};

CitiesContainer.propTypes = {
  activeOffers: PropTypes.array.isRequired,
  activeItemId: PropTypes.any.isRequired,
  city: PropTypes.string.isRequired,
  onChangeScreen: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  sortType: PropTypes.oneOf([
    SortingTypes.POPULAR,
    SortingTypes.PRICE_LOW_TO_HIGH,
    SortingTypes.PRICE_HIGH_TO_LOW,
    SortingTypes.TOP_RATED_FIRST]).isRequired,
};

export default CitiesContainer;
