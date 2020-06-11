import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
    const {rentalOffers} = props;

    return (
        <Main rentalOffers={rentalOffers} />
    );
};

export default App;
