import React from "react";

const DivBox = props => {
  let output = "";

  switch (props.type) {
    case "full":
      output = (
        <div className="col-6 solar-input-div">
          <div className="solar-input-div-box full-box">
            <div className="solar-input-div-left-icon ">
              <div className={`solar-icon ${props.leftIcon}`} />
            </div>
            <div className="solar-input-div-text solar-input-full-text">
              {props.text}
            </div>
            <div className="solar-input-div-icon ">
              <div className={props.rightIcon} />
            </div>
          </div>
          <label className="solar-form-label darker-label">{props.label}</label>
        </div>
      );
      break;
    default:
      output = (
        <div className="col-6 solar-input-div">
          <div className="solar-input-div-box open-box">
            <div className="solar-input-div-left-icon ">
              <div className={`solar-icon ${props.leftIcon}`} />
            </div>

            <div className="solar-input-div-text">{props.text}</div>
          </div>

          <label className="solar-form-label center-al darker-label">
            {props.label}
          </label>
        </div>
      );
  }

  return <React.Fragment>{output}</React.Fragment>;
};

export default DivBox;
