import React from "react";
import DivBox from "../../../General/DivBox/DivBox";

const AccountSummary = props => (
  <React.Fragment>
    <div className="investor-sub-title">Account Summary</div>
    <div className="investor-separator" />
    <div className="account-summary-form">
      <DivBox type="full" 
        text="martin wainstein"
        label="investor"
        leftIcon="investor-icon"
        rightIcon="profile-edit-icon"
      />
    </div>
  </React.Fragment>
);

export default AccountSummary;
