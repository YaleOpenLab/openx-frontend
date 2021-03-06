import React from "react";
import LandingItem from "./LandingItem/LandingItem";
import ROUTES from "../../../routes/routes";

const landingComponentItems = props => (
  <div className="content">
    <div className="justify-content-around row items">
      <LandingItem
        url={ROUTES.EXPLORE}
        title="Explore"
        imageUrl="https://i.ibb.co/FnPkRg0/landing-page-1.png"
        diffUrl="INVEST IN PROJECTS >"
      />
      <LandingItem
        url={ROUTES.DEVELOPER}
        title="Originate"
        imageUrl="https://i.ibb.co/Nytxtjd/Landing-Page-2.png"
        diffUrl="ACCESS THE ENGINE >"
      />
    </div>
  </div>
);

export default landingComponentItems;
