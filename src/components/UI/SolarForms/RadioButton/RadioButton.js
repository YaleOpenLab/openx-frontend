import React from "react";

const RadioButton = props => (
  <div className="solar-radio-button">
    <input
      type="checkbox"
      id={props.name}
      name={props.name}
      className="solar-input-radio-button"
      checked={props.checked}
    />
    <label htmlFor={props.name}>{props.label}</label>
  </div>
);

export default RadioButton;
