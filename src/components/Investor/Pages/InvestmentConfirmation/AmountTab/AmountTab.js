import React from "react";
import DivBox from "../../../../General/DivBox/DivBox";

const AmountTab = props => (
  <div className="invesc-confirm-amount">
    <div className="container">
      <div className="col-12 col-md-10 col-lg-8 mx-auto">
        <div className="row">
          <div className="col-12 solar-form-separator" />
          <div className="col-12 invest-confirm-header">
            Deine your investment amount
          </div>
          <div className="col-12 invest-confirm-wrapper">
            <div className="col-4 invest-confirm-text">I want to invest:</div>
            <div className="col-8 solar-input-div">
              <span className="invest-confirm-input-icon">usd $</span>
              <input
                type="text"
                className="solar-form-input invest-confirm-input"
                name="userName"
                value={props.investmentValue}
                onChange={value => props.handleChange(value)}
              />
              <label
                htmlFor="userName"
                className="solar-form-label invest-confirm-label"
              >
                minimum - $100 usd
              </label>
            </div>
          </div>
          <div className="col-12 invest-confirm-wrapper">
            <div className="col-4 invest-confirm-text">Investment fee:</div>
            <div className="col-8 invest-confirm-value">$ 0.0</div>
          </div>
          <div className="col-12 invest-confirm-wrapper">
            <div className="col-4 invest-confirm-text uppercase">total:</div>
            <div className="col-8 invest-confirm-value total">
              $ {props.investmentValue.toFixed(1)}
            </div>
          </div>
          <div className="col-12 solar-form-separator" />
          <div className="col-12 invest-confirm-wrapper">
            <div className="col-4 invest-confirm-text">
              Your available balance:
            </div>
            <div className="col-8 invest-confirm-value">
              <div className="confirm-icon wallet-icon" />
              <div className="invest-confirm-value-text">$ 35'052.4</div>
            </div>
          </div>
          <div className="col-12 invest-confirm-wrapper">
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
          <div className="col-12 solar-form-separator" />
        </div>
      </div>
    </div>
  </div>
);

export default AmountTab;
