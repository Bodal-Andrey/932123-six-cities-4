import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import InfoAboutOffer from "../info-about-offer/info-about-offer.jsx";
import {ActionCreator} from "../../reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeOffer: null};

    this.onChangeScreen = this.onChangeScreen.bind(this);
  }

  onChangeScreen(offer) {
    this.setState({activeOffer: offer});
  }

  _renderScreen() {

    if (this.state.activeOffer) {
      return (
        <InfoAboutOffer offer={this.state.activeOffer} onChangeScreen={this.onChangeScreen} />
      );
    } else {
      return (<Main
        offers={this.props.offers}
        onChangeScreen={this.onChangeScreen}
        city={this.props.city}
        activeOffers={this.props.activeOffers}
        onCityButtonClick={this.props.onCityButtonClick}
      />);
    }
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/dev-offer">
            <InfoAboutOffer
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  activeOffers: PropTypes.array.isRequired,
  onCityButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCityButtonClick(city) {
    dispatch(ActionCreator.cityChange(city));
  }
});

const mapStateToProps = (state) => {
  return {
    activeOffers: state.offers.filter((item) => item.city.name === state.city),
    offers: state.offers,
    city: state.city,
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
