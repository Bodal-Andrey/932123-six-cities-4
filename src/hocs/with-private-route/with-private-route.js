import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../const.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";

const withPrivateRoute = (Component, path) => {
  const WithAuthRoute = (props) => {
    const {authStatus} = props;

    return authStatus === AuthorizationStatus.AUTH ?
      <Component {...props} /> :
      <Redirect to={path} />;
  };

  WithAuthRoute.propTypes = {
    authStatus: PropTypes.string.isRequired,
  };

  const mapStateToProps = (state) => {
    return {authStatus: getAuthStatus(state)};
  };

  return connect(mapStateToProps)(WithAuthRoute);
};

export default withPrivateRoute;
