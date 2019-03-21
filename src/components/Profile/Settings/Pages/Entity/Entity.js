import React from "react";
import StepsForm from "../../../../General/StepsForm/StepsForm";
import Register from "./EntityTabs/Register/Register";

const Entity = props => (
  <div className="ProfileEntity">
    <StepsForm
      tabs={[
        { name: "register", key: 1 },
        { name: "identification", key: 2 },
        { name: "key gen", key: 3 },
      ]}
    >
      <Register key={1} />
      <div key={2}>2</div>
      <div key={3}>3</div>
    </StepsForm>
  </div>
);

export default Entity;
