import React from "react";
import DevelopmentStage from "./DevelopmentStage/DevelopmentStage";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../../../routes/routes";
import ScrollableAnchor from "react-scrollable-anchor";

const Forecast = props => (
  <ScrollableAnchor id={"stageforecast"}>
    <section className="Forecast">
      <div className="container">
        <div className="row">
          <div className="col-12 title border-bottom no-padding">
            Project Stage & Forecast
          </div>
          <div className="col-12">
            <div className="row mx-auto">
              <div className="component-title col-12 no-padding margin-top">
                <span>development stage</span>
              </div>
              <div className="col-12">
                <DevelopmentStage data={props.tempData.graph} currentStage={props.data.Stage} />
              </div>
              <div className="col-12 col-sm-7 mx-auto mg-top-15 forecast-info">
                <div className="forecast-info-title">{props.tempData.graph.stageName}</div>
                <div className="forecast-info-sub-title">current stage</div>
                <div className="forecast-info-content">
                  {props.tempData.graph.stageDescription} Larn more>
                </div>
              </div>
              <div className="col-12 mg-top-15 link-to-records">
                <NavLink to={props.tempData.fullTimelineRecords} className="small">FULL TIMELINE RECORDS ></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="solar-financial-restricted">
        <div className="container">
          <div className="row">
            <div className="component-title col-12 margin-top">
              <span>solar / </span>financial state & forecast
            </div>
            <div className="col-12 col-sm-7 mx-auto mg-top-15 forecast-info">
              <div className="lock-icon" />
              <div className="restricted-info-sub-title">access restricted</div>
              <div className="forecast-info-content">
                Access to this section is reserved for contract parties. Either
                link-to-login you are not logged in, or you don’t have access
                credentials.
              </div>
            </div>
            <div className="col-12 mg-top-15 link-to-login">
              <NavLink to={ROUTES.LOGIN}>log in ></NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Forecast;
