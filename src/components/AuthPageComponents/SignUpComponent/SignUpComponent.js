import React from "react";
import { Formik, Field } from "formik";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";

const signUpComponent = props => (
  <div className="col-sm-10 col-md-6 auth-form my-auto">
    <div className="auth-title">SignUp</div>
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={(values, actions) => {
        props.history.push(ROUTES.LOGIN);
      }}
      render={props => (
        <form onSubmit={props.handleSubmit} className="solar-form">
          <div className="inner-addon left-addon">
            <i className="solar-icon user-icon" />
            <Field
              type="text"
              className="solar-form-input"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="inner-addon left-addon">
            <i className="solar-icon user-icon" />
            <Field
              type="text"
              className="solar-form-input"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="inner-addon left-addon">
            <i className="solar-icon email-icon" />
            <Field
              type="email"
              className="solar-form-input"
              name="email"
              placeholder="Email"
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
            <button type="submit" className="solar-form-button solar-btn-normal">
              Submit
            </button>
          </div>
        </form>
      )}
    />
    <NavLink className="auth-notice" to={ROUTES.LOGIN}>
      Already have an account? Log In
    </NavLink>
  </div>
);

export default signUpComponent;
