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
            <Field
              type="text"
              className="auth-input"
              name="firstName"
              placeholder="First Name"
            />
            <Field
              type="text"
              className="auth-input"
              name="lastName"
              placeholder="Last Name"
            />
            <Field
              type="email"
              className="auth-input"
              name="email"
              placeholder="Email"
            />
            <Field
              type="password"
              className="auth-input"
              name="password"
              placeholder="Password"
            />
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
