import React, { Component } from "react";
import { Formik, Field } from "formik";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";

class LoginComponent extends Component {
  render() {
    return (
      <div className="col-sm-10 col-md-6 auth-form  my-auto">
        <div className="auth-title">LogIn</div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            this.props.history.push(ROUTES.HOME);
          }}
          render={props => (
            <form onSubmit={props.handleSubmit} className="solar-form">
            <div className="inner-addon left-addon">
              <i className="solar-icon user-icon"></i>
              <Field
                type="email"
                className="solar-form-input"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="inner-addon left-addon">
              <i className="solar-icon password-icon"></i>
              <Field
                type="password"
                className="solar-form-input"
                name="password"
                placeholder="Password"
              />
            </div>
              <button type="submit" className="solar-form-button">
                Log In
              </button>
            </form>
          )}
        />
        <NavLink className="auth-notice" to={ROUTES.SIGNUP}>
          Or create an account
        </NavLink>
      </div>
    );
  }
}

export default LoginComponent;
