import React, {createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../../reducer/user/user.js";
import {ActionCreator as AppActionCreator} from "../../../reducer/app/app.js";
import Header from "../../header/header.jsx";

class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.email = createRef();
    this.password = createRef();
    this.textError = ``;
    this.state = {error: false};

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    const {onUserAuthorization, onChangeAuthState} = this.props;
    evt.preventDefault();

    onUserAuthorization({
      email: this.email.current.value,
      password: this.password.current.value,
    })
    .then(() => {
      this.setState({error: false});
      onChangeAuthState(false);
    })
    .catch((err) => {
      this.textError = err.response.data.error;
      this.setState({error: true});
    });
  }

  render() {
    return (
      <div className="page page--gray page--login">
        <Header isLogoActive={false} />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form onSubmit={this._handleSubmit} className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={this.email} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={this.password} />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
                {this.state.error &&
                  <div style={{marginTop: `15px`, fontSize: `15px`, color: `#ff0000`}}>{this.textError}</div>
                }
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
  onChangeAuthState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onUserAuthorization(authInfo) {
    dispatch(Operation.userLogin(authInfo));
  },
  onChangeAuthState(state) {
    dispatch(AppActionCreator.authStateChange(state));
  }
});

export {SignInPage};

export default connect(null, mapDispatchToProps)(SignInPage);