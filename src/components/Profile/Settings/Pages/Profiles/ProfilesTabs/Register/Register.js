import React from "react";
import RegisteredProfiles from "./RegisteredProfiles/RegisteredProfiles";
import RegisterNewProfile from "./RegisterNewProfile/RegisterNewProfile";

const Register = props => (
  <div className="entity-register">
    <div className="container">
      <div className="col-12 col-md-10 col-lg-8 mx-auto">
        <div className="row solar-form">
          <RegisteredProfiles />
          <div className="col-12 solar-form-separator" />
          <RegisterNewProfile />
          <div className="col-12 solar-form-separator" />
        </div>
      </div>
    </div>
  </div>
);

export default Register;
