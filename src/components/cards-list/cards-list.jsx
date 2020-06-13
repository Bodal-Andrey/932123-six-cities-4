import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = (props) => {
  const {offerName} = props;

  return (
    <React.Fragment>
      <div className="cities__places-list places__list tabs__content">
        {offerName.map((name) => <Card key={name} name={name} />)}
      </div>
    </React.Fragment>
  );
};

CardsList.propTypes = {
  offerName: PropTypes.array.isRequired,
};

export default CardsList;
