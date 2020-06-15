import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = (props) => {
  const {offerName, onCardNameClick} = props;

  return (
    <React.Fragment>
      <div className="cities__places-list places__list tabs__content">
        {offerName.map((name) => <Card key={name} name={name} onCardNameClick={onCardNameClick} />)}
      </div>
    </React.Fragment>
  );
};

CardsList.propTypes = {
  offerName: PropTypes.array.isRequired,
  onCardNameClick: PropTypes.func.isRequired,
};

export default CardsList;
