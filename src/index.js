import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";
import {Offers} from "./data-test.js";

ReactDOM.render(
    <App
      offersCount={Offers.OFFERS_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
