import React from "react";
import DevelopmentStage from "./DevelopmentStage/DevelopmentStage";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../../../routes/routes";
import ScrollableAnchor from "react-scrollable-anchor";
import { STAGES } from "../../../../../helpers/enums/stages";
import Title from "../../../../General/Title/Title";

const Forecast = ({data}) => (
  <ScrollableAnchor id={"stageforecast"}>
    <section className="Forecast">
      <Title title="Project Stage & Forecast" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="component-title col-12 no-padding">
              <span>development stage</span>
            </div>
          </div>
          <div className="col-12">
            {data &&
              data.stages &&
              data.stages.graph && (
                <DevelopmentStage
                  data={data.stages.graph}
                  currentStage={data.Stage}
                />
              )}
          </div>
          <div className="col-12 col-sm-7 mx-auto mg-top-15 forecast-info">
            <div className="forecast-info-title">
              {STAGES[data.Stage]}
            </div>
            <div className="forecast-info-sub-title">current stage</div>
            {data &&
              data.stages &&
              data.stages.graph && (
                <div className="forecast-info-content">
                  {data.stages.graph.stageDescription}
                  <div className="learn-more">
                    <a href="#">Learn more ></a>
                  </div>
                </div>
              )}
          </div>
          <div className="col-12 mg-top-15 link-to-records">
            {data &&
              data.stages &&
              data.stages.url && (
                <NavLink to={data.stages.url} className="small">
									FULL TIMELINE RECORDS >
                </NavLink>
              )}
          </div>
        </div>
      </div>
      <div className="solar-financial-restricted">
        <div className="container">
          <div className="row">
            <div className="component-title col-12 margin-top">
              solar / financial state & forecast
            </div>
            <div className="col-12 col-sm-7 mx-auto mg-top-15 forecast-info">
              <div className="lock-icon" />
              <div className="restricted-info-sub-title">access restricted</div>
              <div className="forecast-info-content">
                Access to this section is reserved for contract parties. Either
                you are not logged in or you don’t have access
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
