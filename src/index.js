import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Offers = {
  OFFERS_COUNT: 100
};

ReactDOM.render(
    <App rentalOffers={Offers.OFFERS_COUNT} />,
    document.querySelector(`#root`)
);
