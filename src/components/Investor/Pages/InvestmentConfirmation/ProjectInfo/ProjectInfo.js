import React from "react";
import "./ProjectInfo.scss";

const ProjectInfo = props => (
  <div className="confirm-project-info">
    <div className="confirm-project-type">invest in</div>
    <div className="confirm-project-title">pasto public school PoC</div>
    <div className="confirm-project-location">
      <div className="confirm-project-location-icon location-icon" />
      Aibonito, Puerto Rico, USA.
    </div>
    <div className="confirm-project-desc">1 kW solar</div>
    <div className="confirm-project-image">
        <img src="https://i.imgur.com/rHwhDpL.png" alt="pasto public school PoC" />
    </div>
  </div>
);

export default ProjectInfo;
