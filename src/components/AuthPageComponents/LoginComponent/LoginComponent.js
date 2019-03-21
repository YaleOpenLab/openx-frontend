import React, { Component } from "react";
import { Formik, Field } from "formik";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";

class LoginComponent extends Component {
  render() {
    return (
      <div className="col-sm-10 col-md-6 auth-form  my-auto">
        <div className="auth-title">Log In</div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            this.props.history.push(ROUTES.HOME);
          }}
          render={props => (
            <form onSubmit={props.handleSubmit} className="solar-form">
              <div className="inner-addon left-addon">
                <i className="solar-icon user-icon" />
                <Field
                  type="email"
                  className="solar-form-input"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="inner-addon left-addon">
                <i className="solar-icon password-icon" />
                <Field
                  type="password"
                  className="solar-form-input"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="auth-button">
                <button
                  type="submit"
                  className="solar-form-button solar-btn-normal"
                >
                  Log In
                </button>
              </div>
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
