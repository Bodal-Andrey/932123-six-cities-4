import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "../../const.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";

const PrivateRoute = (props) => {
  const {path, exact, render, authStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authStatus === AuthorizationStatus.AUTH ?
            render() :
            <Redirect to={AppRoute.LOGIN} />
        );
      }} />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  authStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired,
};

const mapStateToProps = (state) => {
  return {authStatus: getAuthStatus(state)};
};

export {PrivateRoute};

export default connect(mapStateToProps, null)(PrivateRoute);
