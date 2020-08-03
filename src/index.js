import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import createApi from "./api.js";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {ActionCreator as UserActionCreator, Operation as UserOperation} from "./reducer/user/user.js";
import {AuthorizationStatus} from "./const.js";

const onUnauthorized = (() => {
  store.dispatch(UserActionCreator.authStatusChange(AuthorizationStatus.NO_AUTH));
});

const api = createApi(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
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
