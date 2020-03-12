import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";
import * as Yup from "yup";
import { connect } from "react-redux";
import history from "../../../helpers/history";
import { validateAction } from "../../Profile/store/actions";
import { Http } from "../../../services/Http";
import { displayErrorAction } from "../../../store/actions/actions";
import Storage from "../../../services/Storage";

// Move validation rules into separate file
const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .required("Required")
});

const LoginComponent = ({
  fetchUserAccount,
  showMessage,
  loading,
  authorized
}) => {
  useEffect(() => {
    if (authorized && Storage.get("username") && Storage.get("token")) {
      showMessage("success", "Logged In");
      history.push(ROUTES.HOME);
    }
  }, [authorized]);

  return (
    <div className="col-sm-10 col-md-6 auth-form  my-auto">
      <div className="auth-title">Log In</div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, actions) => {
          Http.getToken(values.username, values.password).subscribe(
            response => {
              if (response.data.Code === 500) {
                showMessage("error", "User Not Registered");
              } else if (response.data.Token) {
                history.push(ROUTES.HOME);
                fetchUserAccount("user", values.username);
              }
            }
          );
        }}
        validationSchema={LoginSchema}
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
              {errors.username && touched.username && (
                <div className="solar-form-error-text">{errors.username}</div>
              )}
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
              {errors.password && touched.password ? (
                <div className="solar-form-error-text">{errors.password}</div>
              ) : null}
            </div>
            <div className="auth-button">
              <button
                type="submit"
                className="solar-form-button solar-btn-normal"
                disabled={
                  loading ||
                  (errors.username && touched.username) ||
                  (errors.password && touched.password)
                }
              >
                {loading ? "loading.." : "Log In"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <NavLink className="auth-notice" to={ROUTES.SIGNUP}>
        Don't have an account? Signup
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.profile.user.error,
  loading: state.profile.user.isLoading,
  authorized: state.profile.user.authorized
});

const mapDispatchToProps = dispatch => ({
  fetchUserAccount: (entity, username) =>
    dispatch(validateAction(entity, username)),
  showMessage: (type, message) => dispatch(displayErrorAction(type, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
