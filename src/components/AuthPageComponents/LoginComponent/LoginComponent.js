import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";
import * as Yup from "yup";
import { connect } from "react-redux";
import { fetchLogin } from "./store/actions";
import { bindActionCreators } from "redux";
import { sha3_512 } from 'js-sha3';
import { Storage } from "../../../services/Storage";
Storage = new Storage();  

// Move validation rules into separate file
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .required("Required")
});

class LoginComponent extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.authorized !== prevProps.authorized) {
      Storage.set('token', "token");
      // TODO: handle redirect here
    }
    if (this.props.error !== prevProps.error) {
      // TODO: handle error here
    }
  }

  render() {
    return (
      <div className="col-sm-10 col-md-6 auth-form  my-auto">
        <div className="auth-title">Log In</div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            const payload = {
              username: values.email,
              password: sha3_512(values.password)
              // Working credentials
              // username: "martin",
              // password: "9a768ace36ff3d1771d5c145a544de3d68343b2e76093cb7b2a8ea89ac7f1a20c852e6fc1d71275b43abffefac381c5b906f55c3bcff4225353d02f1d3498758"
            };
            this.props.fetchLogin(payload);
          }}
          validationSchema={LoginSchema}
        >
          {({ errors, touched, isValidating }) => (
            <Form className="solar-form">
              <div className="inner-addon left-addon">
                <i className="solar-icon user-icon" />
                <Field
                  type="email"
                  className={`solar-form-input ${
                    errors.email && touched.email
                      ? "solar-form-input-error"
                      : ""
                  }`}
                  name="email"
                  placeholder="Email"
                />
                {errors.email && touched.email && (
                  <div className="solar-form-error-text">{errors.email}</div>
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
                  disabled={this.props.loading}
                >
                  {this.props.loading ? "loading.." : "Log In"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <NavLink className="auth-notice" to={ROUTES.SIGNUP}>
          Or create an account
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => ({ error: state.auth.error, loading: state.auth.isLoading, authorized: state.auth.authorized });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
