import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";
import InfoAboutOffer from "../info-about-offer/info-about-offer.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const MainWrapped = withActiveItem(Main);

class App extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   this.state = {activeOffer: -1};

  //   this.onChangeScreen = this.onChangeScreen.bind(this);
  // }

  // onChangeScreen(offer) {
  //   this.setState({activeOffer: offer});
  // }

  _renderScreen() {
    const {activeOffer, onChangeActiveOffer} = this.props;

    if (activeOffer) {
      return (
        <InfoAboutOffer offer={activeOffer} onChangeScreen={onChangeActiveOffer} />
      );
    } else {
      return (<MainWrapped
        sourceActiveItemId={-1}
        onChangeScreen={onChangeActiveOffer}
      />);
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
  activeOffer: PropTypes.any.isRequired,
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
    activeOffer: state.activeOffer,
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
