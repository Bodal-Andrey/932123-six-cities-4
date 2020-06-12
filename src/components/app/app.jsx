import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offersCount, offerName} = props;

  return (
    <Main
      offersCount={offersCount}
      offerName={offerName}
    />
  );
};

export default App;
