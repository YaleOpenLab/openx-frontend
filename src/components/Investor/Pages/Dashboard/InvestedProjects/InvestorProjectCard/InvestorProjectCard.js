import React from "react";
import "./InvestorProjectCard.scss";
import { NavLink } from "mdbreact";
import ROUTES from "../../../../../../routes/routes";
import SummaryCards from "../../../../../General/SummaryCards/SummaryCards";

const InvestorProjectCard = props => (
  <div className="col-12 col-sm-6 col-md-4 investor-project-card">
    <div className="projects-box">
      <NavLink to={ROUTES.EXPLORE} className="no-padding">
        <div className="projects-image-box">
          <button className="watch-button-explore" type="button">
            <div className="watch-icon" />
          </button>
          <img src="https://i.imgur.com/rHwhDpL.png" alt="project card" />
        </div>
      </NavLink>
      <div className="projects-description-box">
        <div className="row">
          <div className="col-12 desc-status">Stage 7 - Legacy</div>
          <div className="col-12 desc-title">
            <NavLink className="no-padding" to={ROUTES.EXPLORE}>
              Pasto Public School PoC
            </NavLink>
          </div>
          <div className="col-12 desc-location">
            <div className="projects-location-icon location-icon" />
            Aibonito, Puerto Rico, USA.
          </div>
          <div className="col-12 desc-spec-value">1 kW</div>
          <div className="col-12 desc-category">RESEARCH PROJECT</div>
        </div>
      </div>
      <SummaryCards
        items={[
          { value: "$ 20'000", desc: "your investment" },
          { value: "Donation", desc: "your return" },
          { value: "N/A", desc: "investment rating" },
          { value: "4/4", desc: "impact rating" },
          { value: "No immediate action", desc: "project actions" },
        ]}
      />
      <div className="desc-see-full-project">See Full Project Page ></div>
    </div>
  </div>
);

export default InvestorProjectCard;
