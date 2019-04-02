import React from "react";
import { Formik, Field } from "formik";

const Account = props => (
  <div className="ProfileAccount">
    <Formik
      initialValues={{
        userName: "",
        fullName: "",
        email: "",
        address: "",
        country: "",
        city: "",
        zipCode: ""
      }}
      onSubmit={(values, actions) => {}}
      render={props => (
        <form onSubmit={props.handleSubmit} className="solar-form">
            <div className="row">
              <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="row">
                  <div className="col-6 solar-input-div">
                    <Field
                      type="text"
                      className="solar-form-input"
                      name="userName"
                      required
                    />
                    <label htmlFor="userName" className="solar-form-label">
                      user name
                    </label>
                  </div>
                  <div className="col-6 solar-input-div">
                    <Field
                      type="text"
                      className="solar-form-input"
                      name="fullName"
                      required
                    />
                    <label htmlFor="fullName" className="solar-form-label">
                      full name
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
                </div>
              </div>

              <div className="col-12 col-md-10 col-lg-8 mx-auto ">
                <div className="col-12 solar-form-separator" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="row">
                  <div className="col-6 solar-input-div">
                    <Field
                      type="text"
                      className="solar-form-input"
                      name="address"
                      required
                    />
                    <label htmlFor="address" className="solar-form-label">
                      address
                    </label>
                  </div>
                  <div className="col-6 solar-input-div">
                    <Field
                      type="text"
                      className="solar-form-input"
                      name="country"
                      required
                    />
                    <label htmlFor="country" className="solar-form-label">
                      country
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
                      name="city"
                      required
                    />
                    <label htmlFor="city" className="solar-form-label">
                      city
                    </label>
                  </div>
                  <div className="col-6 solar-input-div">
                    <Field
                      type="number"
                      className="solar-form-input"
                      name="zipCode"
                      required
                    />
                    <label htmlFor="zipCode" className="solar-form-label">
                      zip code
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-10 col-lg-8 mx-auto ">
                <div className="col-12 solar-form-separator" />
              </div>
            </div>

            <div className="row">
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
                    <button type="submit" className="solar-form-button solar-btn-normal">
                      save
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </form>
      )}
    />
  </div>
);

export default Account;
