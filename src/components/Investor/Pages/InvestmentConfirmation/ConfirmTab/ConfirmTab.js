import React from "react";
import DivBox from "../../../../General/DivBox/DivBox";
import SwitchButton from "../../../../General/SwitchButton/SwitchButton";

const ConfirmTab = props => (
  <div className="invest-confirm-confirm">
    <div className="container">
      <div className="col-12 col-md-10 col-lg-8 mx-auto">
        <div className="row">
          <div className="col-12 solar-form-separator" />
          <div className="col-12 invest-confirm-header">
            Your investment amount
          </div>
          <div className="col-12 invest-confirm-wrapper">
            <div className="col-4 invest-confirm-text uppercase -no-align">
              total:
            </div>
            <div className="col-8 ">
              <div className="invest-confirm-value total">
                $ {props.investmentValue.toFixed(1)}
              </div>
              <DivBox
                type="open"
                label="wallet address"
                text={props.account.StellarWallet && props.account.StellarWallet.PublicKey}
                col="12"
                classes={["light-box", "big-box", "label-right", "margin-top"]}
              />
              <div className="row">
                <div className="col-8 invest-confirm-profile-items">
                  <div className="label-right">Available:</div>
                </div>
                <div className="col-4 invest-confirm-profile-values">
                  <span className="-bigger">$ {props.usdbalance || '0 (Auto-Exchange Enabled)'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 solar-form-separator" />
        </div>
      </div>
    </div>
    <div className="container confirm-agree-terms">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <SwitchButton
            label="I agree with the investment terms above"
            checked={props.agreeTerms}
            handleChange={() => props.handleToggle("agreeTerms")}
            classes={["-left-align"]}
            onLabel="Yes"
            offLabel="No"
          />
        </div>
      </div>
    </div>
  </div>
);

export default ConfirmTab;
