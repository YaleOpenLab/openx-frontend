import React from "react";
import "./ProgressBar.scss";

const ProgressBar = props => (
  <div className="progress-bar">
    <div className="progress-success" style={{ width: props.progress + "%" }} />
    {props.label ? <div className="progress-label">{props.label}</div> : ""}
  </div>
);

export default ProgressBar;
