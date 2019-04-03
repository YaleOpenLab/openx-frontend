import React from "react";
import DivBox from "../../../../../../../General/DivBox/DivBox";

const RegisterNewProfile = props => (
  <React.Fragment>
    <div className="col-12">
      <div className="component-box-title component-header">
        Register a New User Profile
      </div>
    </div>

    <DivBox
      type="full"
      text="DEVELOPER NAME"
      label="Developer"
      leftIcon="developer-icon"
      rightIcon="profile-add-icon"
    />

  </React.Fragment>
);

export default RegisterNewProfile;
