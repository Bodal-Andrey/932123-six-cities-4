import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";
import InfoAboutOffer from "../info-about-offer/info-about-offer.jsx";

class App extends PureComponent {
  _renderScreen() {
    const {offerId, onChangeActiveOffer} = this.props;

    if (offerId === -1) {
      return (<Main
        sourceActiveItemId={-1}
        onChangeScreen={onChangeActiveOffer}
      />);
    } else {
      return (
        <InfoAboutOffer offer={offerId} onChangeScreen={onChangeActiveOffer} />
      );
    }
  }

  render() {
    const {offers, onChangeActiveOffer} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/dev-offer">
            <InfoAboutOffer
              offer={offers[0]}
              onChangeScreen={onChangeActiveOffer}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  offerId: PropTypes.any.isRequired,
  onChangeActiveOffer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveOffer(id) {
    dispatch(ActionCreator.activeOfferIdChange(id));
  }
});

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    offerId: state.activeOfferId,
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
