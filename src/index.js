import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import createApi from "./api.js";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation, ActionCreator as DataActionCreator} from "./reducer/data/data.js";
import {ActionCreator as UserActionCreator, Operation as UserOperation} from "./reducer/user/user.js";
import {AuthorizationStatus, Error, AppRoute} from "./const.js";
import history from "./history.js";

const onError = ((err) => {
  if (err.response && err.response.status === Error.UNAUTHORIZED) {
    store.dispatch(UserActionCreator.authStatusChange(AuthorizationStatus.NO_AUTH));
    throw err;
  }

  store.dispatch(DataActionCreator.errorChange(err.toJSON().message));
  history.push(AppRoute.ERROR);
});

const api = createApi(onError);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.authCheck());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
