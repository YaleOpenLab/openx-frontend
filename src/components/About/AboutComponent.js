import React from "react";
import "./AboutComponent.scss";
import UnderDevelopment from "../General/UnderDevelopment/UnderDevelopment";

const AboutComponent = () => (
  <React.Fragment>
    <UnderDevelopment />
    <div className="container">
      <div className="about-container">
        <div className="about-content">
          <div className="about-content-notice">ABOUT THE PROJECT</div>
          <div className="about-content-title">
            Open & Frictionless <br />
            Project Finance for a Low Carbon Planet
          </div>
          <div className="about-content-text">
            <p>
              We are building an open source platform that leverages
              decentralization technology for disintermediation of financial
              processes and contractual automation to drive community-owned
              solar projects.
            </p>
            <p>
              OpenSolar’s core technology seeks to streamline the flow of
              crowd-based funds (eg. bonds and equity) to finance the deployment
              of solar assets, allowing end-users to own these resources in a
              short time frame through regular utility-like payments driven by
              energy generation and consumption IoT data.
            </p>
          </div>
          <div className="about-fixed-width">
            <button className="solar-form-button solar-btn-normal">
              go to openx wiki
            </button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default AboutComponent;
