import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import InfoAboutOffer from "../info-about-offer/info-about-offer.jsx";

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
    const {offersCount, offers} = this.props;

    if (this.state.activeOffer) {
      return (
        <InfoAboutOffer offer={this.state.activeOffer} onChangeScreen={this.onChangeScreen} />
      );
    } else {
      return (<Main
        offersCount={offersCount}
        offers={offers}
        onChangeScreen={this.onChangeScreen}
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
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
