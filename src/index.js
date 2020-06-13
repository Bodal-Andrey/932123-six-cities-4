import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Offers = {
  OFFERS_COUNT: 100,
  OFFER_NAMES: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Canal View Prinsengracht`
  ],
};

ReactDOM.render(
    <App
      offersCount={Offers.OFFERS_COUNT}
      offerName={Offers.OFFER_NAMES}
    />,
    document.querySelector(`#root`)
);
