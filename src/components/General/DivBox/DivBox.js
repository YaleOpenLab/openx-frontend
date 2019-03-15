import React from "react";

const DivBox = props => {
  let output = "";

  if (props.type === "full") {
    output = (
      <div className="col-6 solar-input-div">
        <div className="inner-addon left-addon">
          <i className={`solar-icon ${props.leftIcon}`} />
          <div className="solar-input-div-box full-box">
            <div className="solar-input-div-text">{props.text}</div>
            <div className="solar-input-div-icon ">
              <div className={props.rightIcon} />
            </div>
          </div>
        </div>
        <label className="solar-form-label">{props.label}</label>
      </div>
    );
  } else {
    output = (
      <div className="col-6 solar-input-div">
        <div className="inner-addon left-addon">
          <i className={`solar-icon ${props.leftIcon}`} />
          <div className="solar-input-div-box open-box">
            <div className="solar-input-div-text">{props.text}</div>
          </div>
        </div>

        <label className="solar-form-label center-al">
          {props.label}
        </label>
      </div>
    );
  }

  return (
      <React.Fragment>
          { output }
      </React.Fragment>
  );
};

export default DivBox;
