import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import MainPage from "../pages/main-page/main-page.jsx";
import RoomPage from "../pages/room-page/room-page.jsx";
import SignInPage from "../pages/sign-in-page/sign-in-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";
import history from "../../history.js";
import {AppRoute} from "../../const.js";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route.js";

const FavoritesPageWrapped = withPrivateRoute(FavoritesPage, AppRoute.LOGIN);

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.LOGIN} component={SignInPage} />
          <Route exact path={`${AppRoute.ROOM}/:id`} component={RoomPage} />
          <Route exact path={AppRoute.FAVORITES} component={FavoritesPageWrapped} />
          <Route path={AppRoute.ROOT} component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
