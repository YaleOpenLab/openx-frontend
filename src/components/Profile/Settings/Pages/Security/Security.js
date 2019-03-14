import React from "react";
import { Formik, Field } from "formik";

const Security = props => {
  return (
    <div className="ProfileSecurity">
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
          recoveryPhone: ""
        }}
        onSubmit={(values, actions) => {
          console.log(values, actions);
        }}
        render={props => (
          <form onSubmit={props.handleSubmit} className="solar-form">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="row">
                    <div className="col-6 solar-input-div">
                      <Field
                        type="password"
                        className="solar-form-input"
                        name="currentPassword"
                        required
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
                        required
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
                        required
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
                        required
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
                  <div className="row">
                    <div className="col-9 solar-input-text-label">
                      Enable two-factor-authentification
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
                        className={"solar-form-button"}
                        disabled
                        style={{ width: "100%" }}
                      >
                        reset
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        className={"solar-form-button"}
                        style={{ width: "100%" }}
                      >
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
};

export default Security;
