import React from "react";
import StepsForm from "../../../../General/StepsForm/StepsForm";
import Register from "./ProfilesTabs/Register/Register";

const Entity = props => (
  <div className="ProfileUsers">
    <StepsForm
      tabs={[
        { name: "register", key: 1 },
        { name: "verify", key: 2 },
        { name: "wallet", key: 3 }
      ]}
    >
      <Register key={1} />
      <div key={2}>2</div>
      <div key={3}>3</div>
    </StepsForm>
  </div>
);

export default Entity;
