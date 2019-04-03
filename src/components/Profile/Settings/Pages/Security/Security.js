import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SwitchButton from "../../../../General/SwitchButton/SwitchButton";

const SecuritySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

class Security extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        recoveryPhone: ""
      },
      twoFactor: false
    };
  }

  handleSubmit = values => {
    // todo: update new password once implemented on back
  };

  render() {
    return (
      <div className="ProfileSecurity">
        <Formik
          initialValues={this.state.initialValues}
          onSubmit={(values, actions) => this.handleSubmit(values, actions)}
          validationSchema={SecuritySchema}
        >
          {({ errors, touched, resetForm }) => (
            <Form className="solar-form">
              <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="row">
                    <div className="col-6 solar-input-div">
                      <Field
                        type="password"
                        className="solar-form-input"
                        name="currentPassword"
                      />
                      <label
                        htmlFor="currentPassword"
                        className="solar-form-label"
                      >
                        current password
                      </label>
                    </div>
                    <div className="col-6 solar-input-div">
                      <Field
                        type="password"
                        className="solar-form-input"
                        name="newPassword"
                      />
                      <label htmlFor="newPassword" className="solar-form-label">
                        new password
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="row">
                    <div className="col-6 solar-input-div">
                      <Field
                        type="text"
                        className="solar-form-input"
                        name="recoveryPhone"
                      />
                      <label
                        htmlFor="recoveryPhone"
                        className="solar-form-label"
                      >
                        recovery phone
                      </label>
                    </div>
                    <div className="col-6 solar-input-div">
                      <Field
                        type="password"
                        className="solar-form-input"
                        name="confirmPassword"
                      />
                      <label
                        htmlFor="confirmPassword"
                        className="solar-form-label"
                      >
                        confirm password
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="col-12 solar-form-separator" />
                </div>

                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <SwitchButton
                    label="Enable two-factor authentification"
                    checked={this.state.twoFactor}
                    handleChange={() =>
                      this.setState(prevState => ({
                        twoFactor: !prevState.twoFactor
                      }))
                    }
                  />
                </div>

                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="col-12 solar-form-separator" />
                </div>

                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        className="solar-form-button solar-btn-white"
                      >
                        reset
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        className="solar-form-button solar-btn-normal"
                      >
                        save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Security;
