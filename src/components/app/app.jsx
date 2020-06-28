import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import InfoAboutOffer from "../info-about-offer/info-about-offer.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeOffer: -1};

    this.onChangeScreen = this.onChangeScreen.bind(this);
  }

  onChangeScreen(id) {
    this.setState({activeOffer: id});
  }

  _renderScreen() {
    const {offersCount, offers} = this.props;
    const {activeOffer} = this.state;

    if (activeOffer === -1 || !offers[activeOffer]) {
      return (
        <Main
          offersCount={offersCount}
          offers={offers}
          onChangeScreen={this.onChangeScreen}
        />
      );
    }

    if (offers[activeOffer]) {
      return (<InfoAboutOffer
        offerId={activeOffer}
        offer={offers[activeOffer]}
        onChangeScreen={this.onChangeScreen}
      />);
    }

    return null;
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
              offerId={1}
              offer={offers[1]}
              onChangeScreen={this.onChangeScreen}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
