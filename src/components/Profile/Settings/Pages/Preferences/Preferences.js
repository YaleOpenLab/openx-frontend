import React, { Component } from "react";
import { Formik, Field } from "formik";
import SwitchButton from "../../../../General/SwitchButton/SwitchButton";

class Preferences extends Component {
  state = {
    switchButton1: false,
    switchButton2: false,
    switchButton3: false,
    switchButton4: false,
    switchButton5: false,
    switchButton6: false
  };

  handleToggleChange = key => {
    this.setState(prevState => ({
      [key]: !prevState[key]
    }));
  };

  render() {
    return (
      <div className="ProfilePreferences">
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
              <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="header-4 margin-bottom-x4">
                    Preferred Settings
                  </div>
                </div>
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
                  <SwitchButton
                    label="Enable two-factor authentification"
                    checked={this.state.switchButton1}
                    handleChange={() => this.handleToggleChange("switchButton1")}
                  />
                  <SwitchButton
                    label="Enable dark mode"
                    checked={this.state.switchButton2}
                    handleChange={() => this.handleToggleChange("switchButton2")}
                  />
                  <SwitchButton
                    label="Enable monthly notifications"
                    checked={this.state.switchButton3}
                    handleChange={() => this.handleToggleChange("switchButton3")}
                  />
                  <SwitchButton
                    label="Make my profile public"
                    checked={this.state.switchButton4}
                    handleChange={() => this.handleToggleChange("switchButton4")}
                  />
                  <SwitchButton
                    label="Share profile between openx platforms"
                    checked={this.state.switchButton5}
                    handleChange={() => this.handleToggleChange("switchButton5")}
                  />
                  <SwitchButton
                    label="Subscribe to monthly openx newsletter"
                    checked={this.state.switchButton6}
                    handleChange={() => this.handleToggleChange("switchButton6")}
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
            </form>
          )}
        />
      </div>
    );
  }
}

export default Preferences;
