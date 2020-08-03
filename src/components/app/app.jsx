import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import MainPage from "../pages/main-page/main-page.jsx";
// import RoomPage from "../pages/room-page/room-page.jsx";
import SignInPage from "../pages/sign-in-page/sign-in-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";
import history from "../../history.js";
import {AppRoute} from "../../const.js";

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <MainPage />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignInPage />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <FavoritesPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
