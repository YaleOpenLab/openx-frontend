import React from "react";
import LandingItem from "./LandingItem/LandingItem";
import ROUTES from "../../../routes/routes";

const landingComponentItems = props => (
  <div className="content">
    <div className="justify-content-around row items">
      <LandingItem url={ROUTES.EXPLORE} title="Explore" imageUrl="https://i.imgur.com/rHwhDpL.png" diffUrl="INVEST IN PROJECTS >" />
      <LandingItem url={ROUTES.DEVELOPER} title="Develop" imageUrl="https://i.imgur.com/rHwhDpL.png" diffUrl="ACCESS THE ORIGINATOR ENGINE >"/>
    </div>
  </div>
);

export default landingComponentItems;
