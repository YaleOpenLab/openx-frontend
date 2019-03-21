import React from "react";
import DivBox from "../../../../../../../General/DivBox/DivBox";

const RegisterNewEntity = props => (
  <React.Fragment>
    <div className="col-12">
      <div className="component-box-title component-header">
        Your Registered Profiles
      </div>
    </div>

    <DivBox
      type="full"
      text="company name"
      label="ENTERPRISE (FOR-PROFIT)"
      leftIcon="profile-business-icon"
      rightIcon="profile-add-icon"
    />
    <DivBox
      type="full"
      text="company name"
      label="ENTERPRISE (FOR-PURPOSE)"
      leftIcon="profile-certified-icon"
      rightIcon="profile-add-icon"
    />
    <DivBox
      type="full"
      text="company name"
      label="NON-PROFIT"
      leftIcon="profile-world-icon"
      rightIcon="profile-add-icon"
    />
    <DivBox
      type="full"
      text="company name"
      label="COOPERATIVE ORG"
      leftIcon="profile-coop-icon"
      rightIcon="profile-add-icon"
    />

  </React.Fragment>
);

export default RegisterNewEntity;
