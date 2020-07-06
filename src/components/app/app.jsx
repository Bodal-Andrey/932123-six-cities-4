import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main} from "../main/main.jsx";
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
    if (this.state.activeOffer) {
      return (
        <InfoAboutOffer offer={this.state.activeOffer} onChangeScreen={this.onChangeScreen} />
      );
    } else {
      return (<Main
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
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
  };
};

export {App};

export default connect(mapStateToProps, null)(App);
