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
            console.log(values, actions);
            this.props.history.push(ROUTES.HOME);
          }}
          render={props => (
            <form onSubmit={props.handleSubmit}>
              <Field
                type="email"
                className="auth-input"
                name="email"
                placeholder="Email"
                required
              />
              <Field
                type="password"
                className="auth-input"
                name="password"
                placeholder="Password"
              />
              <button type="submit" className="auth-button">
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
