import React, {createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Operation as UserOperation} from "../../../reducer/user/user.js";
import {Operation as DataOperation} from "../../../reducer/data/data.js";
import Header from "../../header/header.jsx";
import {AppRoute} from "../../../const.js";
import history from "../../../history.js";
import withActiveItem from "../../../hocs/with-active-item/with-active-item.js";
import {getAuthStatus} from "../../../reducer/user/selectors.js";

class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.email = createRef();
    this.password = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onUserAuthorization, loadFavoriteOffers, onActiveItemChange} = this.props;
    evt.preventDefault();

    onUserAuthorization({
      email: this.email.current.value,
      password: this.password.current.value,
    })
    .then(() => {
      onActiveItemChange(``);
      loadFavoriteOffers();
      history.push(AppRoute.ROOT);
    })
    .catch((err) => {
      onActiveItemChange(err.response.data.error);
    });
  }

  render() {
    const {isSignIn} = this.props;

    if (isSignIn) {
      return <Redirect to={AppRoute.ROOT}/>;
    }

    return (
      <div className="page page--gray page--login">
        <Header isLogoActive={false} />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form onSubmit={this.handleSubmit} className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={this.email} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={this.password} />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignInPage.propTypes = {
  onUserAuthorization: PropTypes.func,
  loadFavoriteOffers: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  isSignIn: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isSignIn: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUserAuthorization(authInfo) {
    dispatch(UserOperation.userLogin(authInfo));
  },
  loadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers());
  }
});

export {SignInPage};

export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(SignInPage));
