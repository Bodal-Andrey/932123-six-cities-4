import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = (props) => {
  const {offers, cardsClass, onActiveItemChange} = props;

  return (
    <div className={cardsClass === `cities` ? `cities__places-list places__list tabs__content` : `near-places__list places__list`}>
      {offers.map((offer) =>
        <Card
          key={offer.id}
          offer={offer}
          cardsClass={cardsClass}
          onActiveItemChange={onActiveItemChange}
        />
      )}
    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ),
  cardsClass: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default CardsList;
