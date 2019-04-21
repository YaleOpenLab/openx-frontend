import React from "react";
import DivBox from "../../../../General/DivBox/DivBox";
import { Formik, Field } from "formik";
import SwitchButton from "../../../../General/SwitchButton/SwitchButton";

const ProfileTab = props => (
  <div className="invesc-confirm-amount">
    <div className="container">
      <div className="col-12 col-md-10 col-lg-8 mx-auto">
        <div className="row">
          <div className="col-12 invest-confirm-amount-wrapper">
            <div className="amount-label">your investment amount</div>
            <div className="amount-value">
              $ {props.investmentValue.toFixed(1)}
            </div>
          </div>
          <div className="col-12 solar-form-separator" />
          <div className="col-12 invest-confirm-header">
            <span className="–dark">Your investor profile and account</span>
          </div>
          <div className="col-12 invest-confirm-wrapper">
            <DivBox
              type="full"
              text={props.account.Name}
              leftIcon="investor-icon"
              label="investor profile"
              rightIcon="profile-edit-icon"
              classes={["big-box"]}
              iconSize="29px"
            />
            <DivBox
              type="open"
              text={props.account.PublicKey}
              label="wallet address"
              classes={["big-box", "light-box"]}
            />
          </div>
          <div className="col-12 invest-confirm-wrapper">
            <div className="row">
              <div className="col-12 col-md-6 invest-confirm-profile-items">
                Your profile setup: <span>100% Complete</span>
              </div>
              <div className="col-12 col-md-6 invest-confirm-flex">
                <div className="row">
                  <div className="col-6 invest-confirm-profile-items">
                    Available:
                  </div>
                  <div className="col-6 invest-confirm-profile-values">
                    <span className="-bigger">$ {props.usdbalance || '0 (AE Enabled)'}</span>
                  </div>
                  <div className="col-12 invest-confirm-profile-info">
                    suggested max amount: $20'000
                  </div>

                  <div className="col-6 invest-confirm-profile-items">
                    Declared Annual Income:
                  </div>
                  <div className="col-6 invest-confirm-profile-values">
                    $110’000
                  </div>
                  <div className="col-6 invest-confirm-profile-items">
                    Declared Net Worth:
                  </div>
                  <div className="col-6 invest-confirm-profile-values">
                    $230’000
                  </div>
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

          <div>
            <div className="invest-confirm-header">
              <span className="–dark">Your details</span>
            </div>
            <div className="invest-form-section">
              <Formik
                initialValues={{
                  address: "",
                  country: "",
                  city: "",
                  zipCode: "",
                  birthDate: "",
                  citizenship: ""
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
                              className="solar-form-input invest-input"
                              name="address"
                              required
                            />
                            <label
                              htmlFor="address"
                              className="solar-form-label invest-label"
                            >
                              address
                            </label>
                          </div>
                          <div className="col-6 solar-input-div">
                            <select
                              className="solar-form-input invest-input"
                              name="country"
                              required
                            >
                              <option />
                              <option>USA</option>
                              <option>Rwanda</option>
                            </select>
                            <label
                              htmlFor="country"
                              className="solar-form-label invest-label"
                            >
                              country
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="row">
                          <div className="col-6 solar-input-div">
                            <Field
                              type="text"
                              className="solar-form-input invest-input"
                              name="city"
                              required
                            />
                            <label
                              htmlFor="city"
                              className="solar-form-label invest-label"
                            >
                              city
                            </label>
                          </div>
                          <div className="col-6 solar-input-div">
                            <Field
                              type="text"
                              className="solar-form-input invest-input"
                              name="zipCode"
                              required
                            />
                            <label
                              htmlFor="zipCode"
                              className="solar-form-label invest-label"
                            >
                              zip code
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="row">
                          <div className="col-6 solar-input-div">
                            <Field
                              type="text"
                              className="solar-form-input invest-input"
                              name="birthDate"
                              required
                            />
                            <label
                              htmlFor="birthDate"
                              className="solar-form-label invest-label"
                            >
                              date of birth
                            </label>
                          </div>
                          <div className="col-6 solar-input-div">
                            <Field
                              type="text"
                              className="solar-form-input invest-input"
                              name="citizenship"
                              required
                            />
                            <label
                              htmlFor="citizenship"
                              className="solar-form-label invest-label"
                            >
                              citizenship
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
            <div className="invest-confirm-header">
              <span className="–dark">Tax & Conflicts of Interest</span>
            </div>
            <div className="invest-form-section">
              <div className="row">
                <div className="col-6 solar-input-div">
                  <select
                    className="solar-form-input invest-input"
                    name="taxCountry"
                  >
                    <option />
                    <option>USA</option>
                    <option>Georgia</option>
                  </select>
                  <label
                    htmlFor="taxCountry"
                    className="solar-form-label invest-label"
                  >
                    tax country
                  </label>
                </div>
                <div className="col-6 solar-input-div">
                  <div name="taxIdentNumber" className="solar-input-div-field">
                    *********8234
                  </div>
                  <label
                    htmlFor="taxIdentNumber"
                    className="solar-form-label invest-label"
                  >
                    TAX IDENTIFICATION NUMBER
                  </label>
                </div>
                <div className="col-12">
                  <SwitchButton
                    label="Are you, or a member of your family, a member of a broker dealer?"
                    checked={props.brokeDeal}
                    handleChange={() => props.handleToggle("brokeDeal")}
                    classes={["-left-align"]}
                    onLabel="Yes"
                    offLabel="No"
                  />
                  <SwitchButton
                    label="Are you, or a member of your family, part of the investee category in this project ?"
                    checked={props.investCategory}
                    handleChange={() => props.handleToggle("investCategory")}
                    classes={["-left-align"]}
                    onLabel="Yes"
                    offLabel="No"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 solar-form-separator" />
        </div>
      </div>
    </div>
  </div>
);

export default ProfileTab;
