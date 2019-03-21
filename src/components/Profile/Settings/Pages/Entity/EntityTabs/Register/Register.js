import React from "react";
import RegisteredEntities from "./RegisteredEntities/RegisteredEntities";
import RegisterNewEntity from "./RegisterNewEntity/RegisterNewEntity";

const Register = props => (
  <div className="entity-register">
    <div className="row solar-form">
      <RegisteredEntities />
      <div className="col-12 solar-form-separator" />
      <RegisterNewEntity />
      <div className="col-12 solar-form-separator" />
    </div>
  </div>
);

export default Register;
