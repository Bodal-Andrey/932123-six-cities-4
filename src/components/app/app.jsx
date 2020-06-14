import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const cardNameHandler = () => {};

const App = (props) => {
  const {offersCount, offerName} = props;

  return (
    <Main
      offersCount={offersCount}
      offerName={offerName}
      onCardNameClick={cardNameHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offerName: PropTypes.array.isRequired,
};

export default App;
