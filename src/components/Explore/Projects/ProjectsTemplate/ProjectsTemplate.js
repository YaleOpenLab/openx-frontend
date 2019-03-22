import React from "react";
import { NavLink } from "mdbreact";
import ROUTES from "../../../../routes/routes";
import DescriptionGrid from "../../../General/DescriptionGrid/DescriptionGrid";
import ProgressBar from "../../../General/ProgressBar/ProgressBar";

const ProjectsTemplate = props => (
  <div className="col-sm-12 col-md-6">
    <div className="projects-box">
      <NavLink to={ROUTES.PROJECT} className="no-padding">
        <div className="projects-image-box">
          <button className="watch-button-explore" type="button">
            <div className="watch-icon" />
          </button>
          <img src={props.imageUrl} alt={props.title} />
        </div>
      </NavLink>
      <div className="projects-description-box">
        <div className="row">
          <div className="col-12 desc-status">{props.status}</div>
          <div className="col-12 desc-title">
            <NavLink className="no-padding" to={ROUTES.PROJECT}>
              {props.title}
            </NavLink>
          </div>
          <div className="desc-location col-12">
            <div className="projects-location-icon location-icon" />
            {props.location}
          </div>
          <div className="col-6 desc-category">Donation</div>
          <div className="col-6 desc-category">Yale / MIT</div>
          <div className="desc-description col-12">
            {props.metadata}
            <ul>
              <li>Research project</li>
              <li>Multi-stakeholder partnership</li>
              <li>Full backup of Admin building</li>
            </ul>
          </div>
          <DescriptionGrid
            list={[
              { value: "3 kW", desc: "solar", type: "base" },
              { value: "0 kWh", desc: "storage" },
              { value: "0.0", desc: "tariff" },
              { value: "1/7", desc: "stage" }
            ]}
          />
          <DescriptionGrid
            list={[
              { value: "0%", desc: "return", type: "blue" },
              { value: "n/a", desc: "rating" },
              { value: "n/a", desc: "tax" },
              { value: "2008", desc: "eta", icon: true }
            ]}
          />
          <div className="col-12 specifics-box">
            <div className="row">
              <div className="col-6 spec-first-price">$4000</div>
              <div className="col-6 spec-second-price">$4000</div>
              <div className="col-12 ">
                <ProgressBar progress={Math.floor(Math.random() * 100 + 1)} label="4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsTemplate;
