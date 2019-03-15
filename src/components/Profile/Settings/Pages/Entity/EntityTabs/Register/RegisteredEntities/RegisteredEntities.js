import React from "react";
import DivBox from "../../../../../../../General/DivBox/DivBox";

const RegisteredEntities = props => (
  <React.Fragment>
    <div className="col-12">
      <div className="component-box-title component-header">
        Your Registered Profiles
      </div>
    </div>

    <DivBox
      type="full"
      text="jennifer sun"
      label="individual"
      leftIcon="profile-user-icon"
      rightIcon="profile-edit-icon"
    />
    <DivBox
      text="GCFONE23AB7Y6C5YZOMKUKGETP"
      label="public key"
      leftIcon="profile-badge-icon"
    />
  </React.Fragment>
);

export default RegisteredEntities;
