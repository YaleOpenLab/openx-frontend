import React from "react";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";
import * as Yup from "yup";
import history from "../../../helpers/history";
import { registerAction } from "../../Profile/store/actions";
import { connect } from "react-redux";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirm is required")
});

const signUpComponent = ({ registerEntity, created }) => {
  if (created) {
    history.push(ROUTES.LOGIN);
  }

  return (
    <div className="col-sm-10 col-md-6 auth-form my-auto">
      <div className="auth-title">Signup</div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          registerEntity("user", {
            username: values.username,
            email: values.email,
            pwd: values.password
          });
        }}
      >
        {({ errors, touched }) => (
          <Form className="solar-form">
            <div className="inner-addon left-addon">
              <i className="solar-icon user-icon" />
              <Field
                type="text"
                className={`solar-form-input ${
                  errors.username && touched.username
                    ? "solar-form-input-error"
                    : ""
                }`}
                name="username"
                placeholder="Username"
              />
              {errors.username && touched.username ? (
                <div className="solar-form-error-text">{errors.username}</div>
              ) : null}
            </div>
            <div className="inner-addon left-addon">
              <i className="solar-icon user-icon" />
              <Field
                type="text"
                className={`solar-form-input ${
                  errors.email && touched.email ? "solar-form-input-error" : ""
                }`}
                name="email"
                placeholder="Email Address"
              />
              {errors.email && touched.email ? (
                <div className="solar-form-error-text">{errors.email}</div>
              ) : null}
            </div>
            <div className="inner-addon left-addon">
              <i className="solar-icon password-icon" />
              <Field
                type="password"
                className={`solar-form-input ${
                  errors.password && touched.password
                    ? "solar-form-input-error"
                    : ""
                }`}
                name="password"
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <div className="solar-form-error-text">{errors.password}</div>
              )}
            </div>
            <div className="inner-addon left-addon">
              <i className="solar-icon password-icon" />
              <Field
                type="password"
                className={`solar-form-input ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "solar-form-input-error"
                    : ""
                }`}
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="solar-form-error-text">
                  {errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <div className="auth-button">
              <button
                type="submit"
                className="solar-form-button solar-btn-normal"
                disabled={
                  (errors.username && touched.username) ||
                  (errors.password && touched.password) ||
                  (errors.email && touched.email)
                }
              >
                Sign up
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <NavLink className="auth-notice" to={ROUTES.LOGIN}>
          Already have an account? Log In
        </NavLink>
      </div>
      <div>
        <NavLink className="auth-notice" to={ROUTES.LOGIN}>
          Forgot Password?
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  created: state.profile.user.created
});

const mapDispatchToProps = dispatch => ({
  registerEntity: (entity, info) => dispatch(registerAction(entity, info))
});

export default connect(mapStateToProps, mapDispatchToProps)(signUpComponent);
