import React from "react";
import landingSolar from "../../../assets/images/landing-invest.png";
import LandingBoardItem from "./LandingBoardItem/LandingBoardItem";

const LandingBoard = props => (
  <div className="landing-board">
    <div className="container">
      <div className="row landing-item-block">
        <LandingBoardItem
          image={landingSolar}
          title="invest"
          description="build a low risk & low carbon securitized portfolio with certified
            impact metrics"
        />
        <LandingBoardItem
          image={landingSolar}
          title="develop"
          description="Originate a project by mobilizing your community and coordinate contractors."
        />
        <LandingBoardItem
          image={landingSolar}
          title="receive"
          description="Host a solar project in your land or roof, pay to own it using your normal tariff."
        />
      </div>
    </div>
  </div>
);

export default LandingBoard;
