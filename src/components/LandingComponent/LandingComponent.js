import React from "react";
import "./LandingComponent.scss";
import SolarPanelImage from "../../assets/images/solar-panel.png";

import LandingComponentHeader from "./LandingComponentHeader/LandingComponentHeader";
import SupportComponent from "../General/SupportComponent/SupportComponent";
import LandingComponentItems from "./LandingComponentItems/LandingComponentItems";

const landingComponent = () => {
  return (
    <React.Fragment>
      <LandingComponentHeader />
      <LandingComponentItems />
      <div className="container">
        <div className="row">
          <div className="col-12 landing-info">
            <img src={SolarPanelImage} alt="Solar Panel" />
            <h1>
              Radical Collaboration <br /> & Open Source Software for a Low Carbon
              Planet
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <SupportComponent />
    </React.Fragment>
  );
};

export default landingComponent;
