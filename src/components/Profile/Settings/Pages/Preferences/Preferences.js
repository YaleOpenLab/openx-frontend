import React from "react";
import { Formik, Field } from "formik";

const Preferences = props => (
  <div className="ProfileSecurity">
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      }}
      onSubmit={(values, actions) => {}}
      render={props => (
        <form onSubmit={props.handleSubmit} className="solar-form">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="row">
                  <div className="col-6 solar-input-div">
                    <Field
                      type="text"
                      className="solar-form-input"
                      name="firstName"
                      required
                    />
                    <label htmlFor="firstName" className="solar-form-label">
                      first name
                    </label>
                  </div>
                  <div className="col-6 solar-input-div">
                    <Field
                      type="text"
                      className="solar-form-input"
                      name="lastName"
                      required
                    />
                    <label htmlFor="lastName" className="solar-form-label">
                      last name
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="row">
                  <div className="col-6 solar-input-div">
                    <Field
                      type="email"
                      className="solar-form-input"
                      name="email"
                      required
                    />
                    <label htmlFor="email" className="solar-form-label">
                      email
                    </label>
                  </div>
                  <div className="col-6 solar-input-div">
                    <Field
                      type="text"
                      className="solar-form-input"
                      name="phoneNumber"
                      required
                    />
                    <label htmlFor="phoneNumber" className="solar-form-label">
                      phone number
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="col-12 solar-form-separator" />
              </div>

              <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="row">
                  <div className="col-9 solar-input-text-label">
                    Enable two-factor authentification
                  </div>
                  <div className="col-3 solar-form-checkbox-switch">
                    <label className="solar-input-switch">
                      <input type="checkbox" /> <div />
                    </label>
                  </div>
                </div>
                <div className="row mg-top-15">
                  <div className="col-9 solar-input-text-label">
                    Enable two-factor authentification
                  </div>
                  <div className="col-3 solar-form-checkbox-switch">
                    <label className="solar-input-switch">
                      <input type="checkbox" /> <div />
                    </label>
                  </div>
                </div>
                <div className="row mg-top-15">
                  <div className="col-9 solar-input-text-label">
                    Enable two-factor authentification
                  </div>
                  <div className="col-3 solar-form-checkbox-switch">
                    <label className="solar-input-switch">
                      <input type="checkbox" /> <div />
                    </label>
                  </div>
                </div>
                <div className="row mg-top-15">
                  <div className="col-9 solar-input-text-label">
                    Enable two-factor authentification
                  </div>
                  <div className="col-3 solar-form-checkbox-switch">
                    <label className="solar-input-switch">
                      <input type="checkbox" /> <div />
                    </label>
                  </div>
                </div>
                <div className="row mg-top-15">
                  <div className="col-9 solar-input-text-label">
                    Enable two-factor authentification
                  </div>
                  <div className="col-3 solar-form-checkbox-switch">
                    <label className="solar-input-switch">
                      <input type="checkbox" /> <div />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="col-12 solar-form-separator" />
              </div>

              <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="row">
                  <div className="col-6">
                    <button
                      type="button"
                      className="solar-form-button"
                      disabled
                    >
                      reset
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="submit" className="solar-form-button">
                      save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    />
  </div>
);

export default Preferences;
