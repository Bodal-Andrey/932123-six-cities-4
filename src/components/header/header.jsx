import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const.js";
import {getAuthStatus, getAuthInfo} from "../../reducer/user/selectors.js";

const Header = (props) => {
  const {isLogoActive, authStatus, authInfo} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className={`header__logo-link ${isLogoActive ? `header__logo-link--active` : ``}`} href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authStatus === AuthorizationStatus.AUTH
                    ? <span className="header__user-name user__name">{authInfo.email}</span>
                    : <span className="header__login">Sign in</span>}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLogoActive: PropTypes.bool.isRequired,
  authInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.any,
    isPro: PropTypes.bool,
    email: PropTypes.string.isRequired,
  }).isRequired,
  authStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired,
};

const mapStateToProps = (state) => {
  return {
    authInfo: getAuthInfo(state),
    authStatus: getAuthStatus(state),
  };
};

export {Header};

export default connect(mapStateToProps, null)(Header);
