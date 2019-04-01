import React from "react";
import "./LandingComponent.scss";
import LandingComponentHeader from "./LandingComponentHeader/LandingComponentHeader";
import SupportComponent from "../General/SupportComponent/SupportComponent";
import LandingComponentItems from "./LandingComponentItems/LandingComponentItems";
import LandingInfo from "./LandingInfo/LandingInfo";
import LandingBoard from "./LandingBoard/LandingBoard";

const landingComponent = () => {
  return (
    <React.Fragment>
      <LandingComponentHeader />
      <LandingBoard />
      <div className="container">
        <LandingInfo />
        <LandingComponentItems />
      </div>
      <SupportComponent />
    </React.Fragment>
  );
};

export default landingComponent;
