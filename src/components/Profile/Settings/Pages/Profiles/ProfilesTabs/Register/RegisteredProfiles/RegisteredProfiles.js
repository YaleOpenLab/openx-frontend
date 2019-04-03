import React from "react";
import DivBox from "../../../../../../../General/DivBox/DivBox";

const RegisteredProfiles = props => (
  <React.Fragment>
    <div className="col-12">
      <div className="component-box-title component-header">
      <span className="-darker">Your Registered Profiles</span>
      </div>
    </div>

    <DivBox
      type="full"
      text="jennifer sun"
      label="investor"
      leftIcon="investor-icon"
      rightIcon="profile-edit-icon"
    />
    <DivBox
      text="GCFONE23AB7Y6C5YZOMKUKGETP"
      label="wallet address"
      leftIcon="wallet-icon"
    />
    <DivBox
      type="full"
      text="jennifer sun"
      label="BENEFICIARY"
      leftIcon="beneficiary-icon"
      rightIcon="profile-edit-icon"
    />
    <DivBox
      text="GCFONE23AB7Y6C5YZOMKUKGETP"
      label="wallet address"
      leftIcon="wallet-icon"
    />
  </React.Fragment>
);

export default RegisteredProfiles;
