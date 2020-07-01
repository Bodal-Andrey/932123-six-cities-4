import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import InfoAboutOffer from "../info-about-offer/info-about-offer.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {offerId: -1};

    this.onChangeScreen = this.onChangeScreen.bind(this);
  }

  onChangeScreen(id) {
    this.setState({offerId: id});
  }

  _renderScreen() {
    const {offersCount, offers} = this.props;

    if (this.state.offerId === -1) {
      return (
        <Main
          offersCount={offersCount}
          offers={offers}
          onChangeScreen={this.onChangeScreen}
        />
      );
    } else {
      return (<InfoAboutOffer
        offerId={this.state.offerId}
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
              offerId={1}
              offers={offers}
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
