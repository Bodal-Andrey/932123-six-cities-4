import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import Main from "../main/main.jsx";
import InfoAboutOffer from "../info-about-offer/info-about-offer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {getShowAuthPage} from "../../reducer/app/selectors.js";
import {getOffers, getActiveOfferId} from "../../reducer/data/selectors.js";

class App extends PureComponent {
  _renderScreen() {
    const {offerId, onChangeActiveOffer, showAuth} = this.props;

    if (showAuth) {
      return (
        <SignIn />
      );
    }

    if (offerId === -1) {
      return (<Main
        sourceActiveItemId={-1}
        onChangeScreen={onChangeActiveOffer}
      />);
    } else {
      return (
        <InfoAboutOffer offerId={offerId.id} onChangeScreen={onChangeActiveOffer} />
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
          <Route exact path="/signin">
            <SignIn />
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
  showAuth: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveOffer(id) {
    dispatch(DataActionCreator.activeOfferIdChange(id));
  }
});

const mapStateToProps = (state) => {
  return {
    offers: getOffers(state),
    offerId: getActiveOfferId(state),
    showAuth: getShowAuthPage(state),
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
