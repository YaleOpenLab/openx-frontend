import React from "react";
import "./SwitchButton.scss";

const SwitchButton = ({label, handleChange, checked, onLabel, offLabel, classes}) => (
  <div
    className={`row toggle-switch ${
			classes ? classes.join(" ") : ""
    }`}
  >
    <div className="col-9 solar-input-text-label">{label}</div>
    <div className="col-3 solar-form-checkbox-switch">
      <label className="solar-input-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange ? e => handleChange(e) : null}
        />
        <div />
        <span>
          {checked
            ? onLabel
              ? onLabel
              : "On"
            : offLabel
            ? offLabel
            : "Off"}
        </span>
      </label>
    </div>
  </div>
);

export default SwitchButton;
