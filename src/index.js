import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Offers} from "./data.js";

ReactDOM.render(
    <App
      offersCount={Offers.OFFERS_COUNT}
      offerName={Offers.OFFER_NAMES}
    />,
    document.querySelector(`#root`)
);
