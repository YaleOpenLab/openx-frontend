import React from "react";
import DevelopmentStage from "./DevelopmentStage/DevelopmentStage";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../../../routes/routes";
import ScrollableAnchor from "react-scrollable-anchor";
import Title from "../../../../General/Title/Title";

let style1 = {
  color: "inherit"
};

const Forecast = ({ data }) => (
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
            <div className="DevelopmentStage">
              <div className="row ds-chart">
                <div className="col-xs-1-10">
                  <img
                    className="ds-image"
                    src="https://via.placeholder.com/50x50"
                    alt="placeholder"
                  />
                </div>
                <div className="col-xs-1-10">
                  <div className="ds-count">0</div>
                  <div className="ds-ball ds-full"></div>
                  <div className="ds-line"></div>
                  <div className="ds-title">
                    <a href="#" title="Stage 0 description" style={style1}>
                      Handshake
                    </a>
                  </div>
                  <div className="ds-date">May 2018</div>
                </div>
                <div className="col-xs-1-10">
                  <div className="ds-count">1</div>
                  <div className="ds-ball ds-full"></div>
                  <div className="ds-line"></div>
                  <div className="ds-title">
                    <a
                      href="#"
                      title="The project is in stage 1, where the project idea is still udner discussion but main parties hae defined and verbal agreements have been achieved. Pre feasibility assessments are being doen in order to have a RFP to receive formal quotes from developers. This stage has high investment risk since formal contracts and final quotes have not been defined."
                      style={style1}
                    >
                      Engagement
                    </a>
                  </div>
                  <div className="ds-date">Jul 2018</div>
                </div>
                <div className="col-xs-1-10">
                  <div className="ds-count">2</div>
                  <div className="ds-ball ds-full"></div>
                  <div className="ds-line"></div>
                  <div className="ds-title">
                    <a
                      href="#"
                      title="The project is in stage 2, where overall project idea and parties have been defined but quotes are needed to advance on a defined budget. This stage means there is already a 'Request for Proposal' document and has cleared feasbility reports. If the report uses a public tender, contractors are able to bid through the platform."
                      style={style1}
                    >
                      Quotes
                    </a>
                  </div>
                  <div className="ds-date">Oct 2018</div>
                </div>
                <div className="col-xs-1-10">
                  <div className="ds-count">3</div>
                  <div className="ds-ball ds-full"></div>
                  <div className="ds-line"></div>
                  <div className="ds-title">
                    <a href="#" title="Stage 3 description" style={style1}>
                      Contracts
                    </a>
                  </div>
                  <div className="ds-date">Dec 2018</div>
                </div>
                <div className="col-xs-1-10">
                  <div className="ds-count">4</div>
                  <div className="ds-ball ds-current"></div>
                  <div className="ds-line"></div>
                  <div className="ds-title">
                    <a
                      href="#"
                      title="The project is in stage 4, meaning all major contracts and quotes relating to total proejct cost have been processed and signed. Your investment at this stage has less risk since financial projections are more detailed than earlier stages. However, risks may occur during the construction periods and some solar contracts do not have warranties against these."
                      style={style1}
                    >
                      The Raise
                    </a>
                  </div>
                  <div className="ds-date">Jan 2019</div>
                </div>
                <div className="col-xs-1-10">
                  <div className="ds-count">5</div>
                  <div className="ds-ball ds-empty"></div>
                  <div className="ds-line"></div>
                  <div className="ds-title">
                    <a href="#" title="Stage 5 description" style={style1}>
                      Construction
                    </a>
                  </div>
                  <div className="ds-date">Feb 2019</div>
                </div>
                <div className="col-xs-1-10">
                  <div className="ds-count">6</div>
                  <div className="ds-ball ds-empty"></div>
                  <div className="ds-line"></div>
                  <div className="ds-title">
                    <a href="#" title="Stage 6 description" style={style1}>
                      Interconnection
                    </a>
                  </div>
                  <div className="ds-date">Mar 2019</div>
                </div>
                <div className="col-xs-1-10">
                  <div className="ds-count">7</div>
                  <div className="ds-ball ds-empty"></div>
                  <div className="ds-line-half"></div>
                  <div className="ds-dashed-line-half-right"></div>
                  <div className="ds-title">
                    <a
                      href="#"
                      title="The project is in legacy stage, also known as O&amp;M for Operations and Management. This means the system has been successfully funded and deployed, and the receiver is making payments appropriately"
                      style={style1}
                    >
                      Legacy
                    </a>
                  </div>
                  <div className="ds-date">Apr 2019</div>
                </div>
                <div className="col-xs-1-10">
                  <div className="ds-count">8</div>
                  <div className="ds-ball ds-empty"></div>
                  <div className="ds-dashed-line-half-left"></div>
                  <div className="ds-title">
                    <a
                      href="#"
                      title="The project is in stage 8, which means that there has been an  ownership flip. Ownership flips can happen when a tax equity investor is involved in a project company, when a pay-to-own model is able to cover the investment principle, when a bond matures or when an equity based investment with convertible notes allows premium stock holders (normally community members) to buy the positiion of equity investors"
                      style={style1}
                    >
                      Handoff
                    </a>
                  </div>
                  <div className="ds-date">May 2019</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-7 mx-auto mg-top-15 forecast-info">
            <div className="forecast-info-title">
              {data["development stage"]["stage title"]}
            </div>
            <div className="forecast-info-sub-title">current stage</div>
            <div className="forecast-info-content">
              {data["development stage"]["stage description"]}
              <div className="learn-more">
                <a href="#">Learn more ></a>
              </div>
            </div>
          </div>
          <div className="col-12 mg-top-15 link-to-records">
            <a href="#">FULL TIMELINE RECORDS ></a>
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
                you are not logged in or you don’t have access credentials.
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
