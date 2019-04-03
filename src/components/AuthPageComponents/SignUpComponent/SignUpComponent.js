import React from "react";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";
import { Http } from "../../../services/Http";
import * as Yup from "yup";
import history from "../../../helpers/history";
import { withSnackbar } from "notistack";

// Move validation rules into separate file
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .required("Required")
});

const signUpComponent = props => (
  <div className="col-sm-10 col-md-6 auth-form my-auto">
    <div className="auth-title">Signup</div>
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        Http.userRegister(
          `${values.firstName} ${values.lastName}`,
          values.email,
          values.password
        ).subscribe(response => {
          if (response.status === 200) {
            const hash = response.data && response.data.U ? response.data.U.Pwhash : null;
            Http.userAskXlm(values.email, hash).subscribe();
            props.enqueueSnackbar("Registered successfully. please login", {
              variant: "success",
              autoHideDuration: 2000
            });
            history.push(ROUTES.LOGIN);
          } else {
            props.enqueueSnackbar(response.statusText, {
              variant: "success",
              autoHideDuration: 2000
            });
          }
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
                errors.firstName && touched.firstName
                  ? "solar-form-input-error"
                  : ""
              }`}
              name="firstName"
              placeholder="First Name"
            />
            {errors.firstName && touched.firstName ? (
              <div className="solar-form-error-text">{errors.firstName}</div>
            ) : null}
          </div>
          <div className="inner-addon left-addon">
            <i className="solar-icon user-icon" />
            <Field
              type="text"
              className={`solar-form-input ${
                errors.lastName && touched.lastName
                  ? "solar-form-input-error"
                  : ""
              }`}
              name="lastName"
              placeholder="Last Name"
            />
            {errors.lastName && touched.lastName ? (
              <div className="solar-form-error-text">{errors.lastName}</div>
            ) : null}
          </div>
          <div className="inner-addon left-addon">
            <i className="solar-icon email-icon" />
            <Field
              type="email"
              className={`solar-form-input ${
                errors.email && touched.email ? "solar-form-input-error" : ""
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
                (errors.email && touched.email) ||
                (errors.password && touched.password) ||
                (errors.firstName && touched.firstName) ||
                (errors.lastName && touched.lastName)
              }
            >
              Sign up
            </button>
          </div>
        </Form>
      )}
    </Formik>
    <NavLink className="auth-notice" to={ROUTES.LOGIN}>
      Already have an account? Log In
    </NavLink>
  </div>
);

export default withSnackbar(signUpComponent);
