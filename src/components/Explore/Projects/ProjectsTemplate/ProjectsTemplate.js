import React from "react";
import { NavLink } from "mdbreact";
import ROUTES from "../../../../routes/routes";

const ProjectsTemplate = props => (
  <div className="col-sm-12 col-md-6">
    <div className="projects-box">
      <NavLink to={ROUTES.PROJECT} className="no-padding">
        <div className="projects-image-box">
          <img
            src={props.imageUrl}
            alt={props.title}
          />
        </div>
      </NavLink>
      <div className="projects-description-box container">
        <div className="row">
          <div className="desc-status col-12">{props.status}</div>
          <div className="desc-title col-12">
            <NavLink className="no-padding" to={ROUTES.PROJECT}>
                {props.title}
            </NavLink>
          </div>
          <div className="desc-location col-12">
            <span className="" />
            Aibonito, Puerto Rico, USA
          </div>
          <div className="col-6 desc-category">Donation</div>
          <div className="col-6 desc-category">Yale / MIT</div>
          <div className="desc-description col-12">
            Installation of InverSOL 3kW moveable system acting as full project
            pilot on smart financing.
            <ul>
              <li>Research project</li>
              <li>Multi-stakeholder partnership</li>
              <li>Full backup of Admin building</li>
            </ul>
          </div>
          <div className="col-12 specifics-box">
            <div className="container">
              <div className="row">
                <div className="col-3 spec-cont -first">3 kW</div>
                <div className="col-3 spec-cont">0 kWh</div>
                <div className="col-3 spec-cont">0.0</div>
                <div className="col-3 spec-cont">1/7</div>
                <div className="col-3 spec-desc -first">solar</div>
                <div className="col-3 spec-desc">storage</div>
                <div className="col-3 spec-desc">tariff</div>
                <div className="col-3 spec-desc">stage</div>
              </div>
            </div>
          </div>
          <div className="col-12 specifics-box">
            <div className="container">
              <div className="row">
                <div className="col-3 spec-cont -second">0%</div>
                <div className="col-3 spec-cont">n/a</div>
                <div className="col-3 spec-cont">n/a</div>
                <div className="col-3 spec-cont">2008</div>
                <div className="col-3 spec-desc -second">return</div>
                <div className="col-3 spec-desc">rating</div>
                <div className="col-3 spec-desc">tax</div>
                <div className="col-3 spec-desc">eta</div>
              </div>
            </div>
          </div>
          <div className="col-12 specifics-box">
            <div className="container">
              <div className="row">
                <div className="col-6 spec-first-price">$4000</div>
                <div className="col-6 spec-second-price">$4000</div>
                <div className="col-12 ">
                  <div>bar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsTemplate;
