import React from "react";
import "./SwitchButton.scss";

const SwitchButton = props => (
  <div className="row toggle-switch">
    <div className="col-9 solar-input-text-label">{props.label}</div>
    <div className="col-3 solar-form-checkbox-switch">
      <label className="solar-input-switch">
        <input type="checkbox" defaultChecked={props.checked ? true : false} />{" "}
        <div />
        <span>{props.checked ? "On" : "Off"}</span>
      </label>
    </div>
  </div>
);

export default SwitchButton;
