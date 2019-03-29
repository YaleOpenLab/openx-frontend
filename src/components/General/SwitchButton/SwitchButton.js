import React from "react";
import "./SwitchButton.scss";

const SwitchButton = props => (
  <div
    className={`row toggle-switch ${
      props.classes ? props.classes.join(" ") : ""
    }`}
  >
    <div className="col-9 solar-input-text-label">{props.label}</div>
    <div className="col-3 solar-form-checkbox-switch">
      <label className="solar-input-switch">
        <input type="checkbox" defaultChecked={props.checked ? true : false} />{" "}
        <div />
        <span>
          {props.checked ? (props.onLabel ? props.onLabel : "On") : (props.offLabel ? props.offLabel : "Off")}
        </span>
      </label>
    </div>
  </div>
);

export default SwitchButton;
