import React from "react";
import DivBox from "../../../../General/DivBox/DivBox";
import { Formik, Field } from "formik";

const ProfileTab = props => (
  <div className="invesc-confirm-amount">
    <div className="invest-confirm-amount-wrapper">
      <div className="amount-label">your investment amount</div>
      <div className="amount-value">$ {props.investmentValue.toFixed(1)}</div>
    </div>
    <div className="col-12 solar-form-separator" />
    <div className="invest-confirm-header">
      <span className="–dark">Your investor profile and account</span>
    </div>
    <div className="invest-confirm-wrapper">
      <DivBox
        type="full"
        text="martin wainstein"
        leftIcon="investor-icon"
        label="investor profile"
        rightIcon="profile-edit-icon"
        classes={["big-box"]}
        iconSize="29px"
      />
      <DivBox
        type="open"
        text="GCFONE23AB7Y6C5YZOMKUKGETP**************"
        label="wallet address"
        classes={["big-box", "light-box"]}
      />
    </div>
    <div className="invest-confirm-wrapper">
      <div className="row">
        <div className="col-12 col-md-6 invest-confirm-profile-items">
          Your profile setup: <span>100% Complete</span>
        </div>
        <div className="col-12 col-md-6 invest-confirm-flex">
          <div className="row">
            <div className="col-6 invest-confirm-profile-items">Available:</div>
            <div className="col-6 invest-confirm-profile-values">
              <span className="-bigger">$35’052.4</span>
            </div>
            <div className="col-12 invest-confirm-profile-info">
              suggested max amount: $20'000
            </div>

            <div className="col-6 invest-confirm-profile-items">
              Declared Annual Income:
            </div>
            <div className="col-6 invest-confirm-profile-values">$110’000</div>
            <div className="col-6 invest-confirm-profile-items">
              Declared Net Worth:
            </div>
            <div className="col-6 invest-confirm-profile-values">$230’000</div>
            <div className="col-12 solar-form-separator" />
            <div className="col-12 solar-form-profile-sub-title">
              Use a different profile
            </div>
            <DivBox
              type="full"
              text="IMPACT FUND X"
              leftIcon="profile-business-icon"
              label="ENTERPRISE FUND"
              rightIcon="profile-add-icon"
              classes={["big-box"]}
              iconSize="29px"
              col="12"
            />
            <div className="col-12 invest-confirm-profile-info">
              WANT TO REGISTER A NEW PROFILE? >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 solar-form-separator" />
    <div className="invest-confirm-header">
      <span className="–dark">Your details</span>

      <Formik
        initialValues={{
          userName: "",
          firstName: "",
          email: "",
          lastName: "",
          address: "",
          country: "",
          city: "",
          zipCode: ""
        }}
        onSubmit={(values, actions) => {}}
        render={props => (
          <form onSubmit={props.handleSubmit} className="solar-form">
            <div className="row">
              <div className="col-12">
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
                      name="firstName"
                      required
                    />
                    <label htmlFor="firstName" className="solar-form-label">
                      first name
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
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
                      name="lastName"
                      required
                    />
                    <label htmlFor="lastName" className="solar-form-label">
                      last name
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
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
            </div>
          </form>
        )}
      />
    </div>

    <div className="col-12 solar-form-separator" />
  </div>
);

export default ProfileTab;
