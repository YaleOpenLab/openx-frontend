import React from "react";
import RegisteredEntities from "./RegisteredEntities/RegisteredEntities";
import RegisterNewEntity from "./RegisterNewEntity/RegisterNewEntity";

const Register = props => (
  <div className="entity-register">
    <div className="container">
      <div className="col-12 col-md-10 col-lg-8 mx-auto">
        <div className="row solar-form">
          <RegisteredEntities {...props} />
          <div className="col-12 solar-form-separator" />
          <RegisterNewEntity />
          <div className="col-12 solar-form-separator" />
        </div>
      </div>
    </div>
  </div>
);

export default Register;
