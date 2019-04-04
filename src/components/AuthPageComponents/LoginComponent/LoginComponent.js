import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import history from "../../../helpers/history";
import { withSnackbar } from "notistack";
import { fetchUserAccount } from "../../Profile/store/actions";

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
      this.props.enqueueSnackbar("Logged In.", {
        variant: "success",
        autoHideDuration: 1500
      });
      history.push(ROUTES.HOME);
    }
    if (this.props.error !== prevProps.error) {
      if (this.props.error) {
        this.props.enqueueSnackbar(this.props.error, {
          variant: "error",
          autoHideDuration: 1500
        });
      }
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
              password: values.password
            };
            this.props.fetchUserAccount(payload);
          }}
          validationSchema={LoginSchema}
        >
          {({ errors, touched }) => (
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
                    this.props.loading ||
                    (errors.email && touched.email) ||
                    (errors.password && touched.password)
                  }
                >
                  {this.props.loading ? "loading.." : "Log In"}
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
  }
}

const mapStateToProps = state => ({
  error: state.profile.account.error,
  loading: state.profile.account.isLoading,
  authorized: state.profile.account.authorized,
  pwhash: state.profile.account.items.Pwhash,
  username: state.profile.account.items.Username,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUserAccount }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(LoginComponent));
