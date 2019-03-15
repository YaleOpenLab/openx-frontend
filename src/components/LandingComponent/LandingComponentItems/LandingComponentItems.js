import React from "react";
import LandingItem from "./LandingItem/LandingItem";
import ROUTES from "../../../routes/routes";

const landingComponentItems = props => (
  <div className="container content">
    <div className="justify-content-around row items">
      <LandingItem url={ROUTES.EXPLORE} title="Explore" imageUrl="https://via.placeholder.com/500x500" />
      <LandingItem url={ROUTES.DEVELOPER} title="Develop" imageUrl="https://via.placeholder.com/500x500" />
    </div>
  </div>
);

export default landingComponentItems;
