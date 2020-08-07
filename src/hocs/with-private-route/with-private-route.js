import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getAuthStatus} from "../../reducer/user/selectors.js";

const withPrivateRoute = (authStatus, Component, path) => {
  const WithAuthRoute = (props) => {
    const {stateAuthStatus} = props;

    return stateAuthStatus === authStatus ?
      <Component {...props} /> :
      <Redirect to={path} />;
  };

  WithAuthRoute.propTypes = {
    stateAuthStatus: PropTypes.string.isRequired,
  };

  const mapStateToProps = (state) => {
    return {stateAuthStatus: getAuthStatus(state)};
  };

  return connect(mapStateToProps)(WithAuthRoute);
};

export default withPrivateRoute;
