import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";
import * as Yup from "yup";
import { connect } from "react-redux";
import { fetchLogin } from "./store/actions";
import { bindActionCreators } from "redux";
import { sha3_512 } from "js-sha3";
import Storage from "../../../services/Storage";
import history from "../../../helpers/history";
import { withSnackbar } from "notistack";

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
      Storage.set("token", "token");
      this.props.enqueueSnackbar("Logged In.", {
        variant: "success",
        autoHideDuration: 2000
      });
      history.push(ROUTES.HOME);
    }
    if (this.props.error !== prevProps.error) {
      this.props.enqueueSnackbar(this.props.error, {
        variant: "error",
        autoHideDuration: 2000
      });
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
            };
            this.props.fetchLogin(payload);
          }}
          validationSchema={LoginSchema}
        >
          {({ errors, touched, isValidating, isSubmitting }) => (
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
                  disabled={
                    isSubmitting ||
                    (errors.email && touched.email) ||
                    (errors.password && touched.password)
                  }
                >
                  {isSubmitting ? "loading.." : "Log In"}
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

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.isLoading,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(LoginComponent));
