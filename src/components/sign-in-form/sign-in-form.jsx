import React from "react";
import PropTypes from "prop-types";

const SignInForm = (props) => {
  const { onSubmit, emailRef, passwordRef } = props;

  return (
    <form onSubmit={onSubmit} className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={emailRef} />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef} />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  emailRef: PropTypes.object.isRequired,
  passwordRef: PropTypes.object.isRequired,
};

export default SignInForm;
