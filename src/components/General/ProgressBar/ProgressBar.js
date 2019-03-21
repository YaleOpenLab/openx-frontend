import React from "react";
import "./ProgressBar.scss";

const ProgressBar = props => (
  <div className="progress-bar">
    <div className="progress-success" style={{ width: props.progress + "%" }} />
  </div>
);

export default ProgressBar;
