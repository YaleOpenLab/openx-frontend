import React from "react";
import { NavLink } from "react-router-dom";

const LandingInfo = props => (
  <div className="row">
    <div className="col-12 landing-info">
      <div className="landing-section">about the project</div>
      <div className="landing-title">
        Open & Frictionless <br /> Project Finance for a Low Carbon Planet
      </div>
      <div className="landing-text">
        <p>
          We are building an open source platform that leverages
          decentralization technology for disintermediation of financial
          processes and contractual automation to drive community-owned solar
          projects.
        </p>
        <p>
          OpenSolar’s core technology seeks to streamline the flow of
          crowd-based funds (eg. bonds and equity) to finance the deployment of
          solar assets, allowing end-users to own these resources in a short
          time frame through regular utility-like payments driven by energy
          generation and consumption IoT data.
        </p>
      </div>
      <div className="landing-action-link">
        <NavLink to="#"> Learn more ></NavLink>
      </div>
    </div>
  </div>
);

export default LandingInfo;
