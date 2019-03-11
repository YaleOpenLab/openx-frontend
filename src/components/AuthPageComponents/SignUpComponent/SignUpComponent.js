import React from "react";
import { Formik, Field } from "formik";
import { NavLink } from 'react-router-dom';
import ROUTES from "../../../routes/routes";

const signUpComponent = props => {
  return (
    <div className="col-sm-10 col-md-6 auth-form my-auto">
      <div className="auth-title">SignUp</div>
      <Formik
        initialValues={{ firstName: "", lastName:"", email: "", password: "" }}
        onSubmit={(values, actions) => {
            console.log(values, actions);
            props.history.push(ROUTES.LOGIN);
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <div className="inner-addon left-addon">
              <i className="solar-icon user-icon"></i>
              <Field
                type="text"
                className="auth-input"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="inner-addon left-addon">
              <i className="solar-icon user-icon"></i>
              <Field
                type="text"
                className="auth-input"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="inner-addon left-addon">
              <i className="solar-icon email-icon"></i>
              <Field
                type="email"
                className="auth-input"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="inner-addon left-addon">
              <i className="solar-icon password-icon"></i>
              <Field
                type="password"
                className="auth-input"
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="auth-button">
              Submit
            </button>
          </form>
        )}
      />
      <NavLink className="auth-notice" to={ROUTES.LOGIN} >Already have an account? Log In</NavLink>
    </div>
  );
};

export default signUpComponent;
