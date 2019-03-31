import React from "react";
import "./Overview.scss";
import ScrollableAnchor from "react-scrollable-anchor";
import SummaryCards from "../../../../General/SummaryCards/SummaryCards";
import caseToName from "../../../../../helpers/functions/replace-case-name";
import ExecutiveSummary from "./constants";
import contextMap from "../../../../../assets/images/project-context-map.svg";

const Overview = props => {
  let cards = null;
  const tempData = props.tempData;
  const data = props.data;

  if (data.ExecutiveSummary) {
    cards = Object.keys(data.ExecutiveSummary).map(key => {
      let title = ExecutiveSummary[key].title;
      let icon = ExecutiveSummary[key].icon;
      let items = [];
      if (data.ExecutiveSummary[key]) {
        for (let item of Object.entries(data.ExecutiveSummary[key])) {
          items.push({
            value: item[1],
            desc: caseToName(item[0])
          });
        }
      }

      return (
        <div className="col-sm-6 col-lg-3" key={title}>
          <SummaryCards title={title} items={items} icon={icon} />
        </div>
      );
    });
  }

  return (
    <ScrollableAnchor id={"overview"}>
      <section className="Overview">
        <div className="container">
          <div className="row">
            <div className="col-12 title border-bottom no-padding">
              Project Overview
            </div>
            <div className="col-12 summary">
              <div className="col-12 title-yellow no-padding">
                Executive Summary
              </div>
              <div className="col-12 summary-grid">
                <div className="container">
                  <div className="row">{cards}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {data.OHeroImage ? (
          <div className="full-image">
            <img src={data.OHeroImage} alt="summary banner" />
          </div>
        ) : (
          <div className="overview-separator" />
        )}

        <div className="opportunity">
          <div className="container">
            <div className="row">
              <div className="col-12 title-yellow margin-top">Opportunity</div>
              <div className="col-sm-12 col-md-8 margin-top">
                <div className="sub-title margin-bottom-x4">
                  {tempData.opportunity.partOne[0].title}
                </div>
                <div className="sub-text text-bg">
                  {tempData.opportunity.partOne[0].content1}
                  <div className="sub-spacer" />
                  {tempData.opportunity.partOne[0].content2}
                </div>
              </div>

              <div className="col-sm-12 col-md-4 margin-top">
                <div className="sub-title margin-bottom-x4">
                  {tempData.opportunity.partOne[1].title}
                </div>
                <div className="sub-image">
                  <img
                    src={tempData.opportunity.partOne[1].content}
                    alt="placeholder"
                  />
                </div>
              </div>

              <div className="col-12 col-sm-6 margin-top">
                <div className="opportunity-sub-image">
                  <img
                    src={data.OImages && data.OImages[0]}
                    alt="opportunity 1"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 margin-top">
                <div className="opportunity-sub-image">
                  <img
                    src={data.OImages && data.OImages[1]}
                    alt="opportunity 2"
                  />
                </div>
              </div>
              {data.OOImages && (
                <div className="col-12 obligator-pannel">
                  <div className="row">
                    <div className="col-12 col-sm-5">
                      <div className="opportunity-sub-image">
                        <img
                          src={data.OOImages && data.OOImages[1]}
                          alt="opportunity 2"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-7">
                      <div className="obligator-title">
                        Originator’s Message
                      </div>
                      <div className="obligator-text">
                        Together, we bring a combined 30 years of professional
                        experience working on energy, environmental and climate
                        change issues, from government, to non-profits and the
                        private sector. <br /> Our team is comprised of
                        experienced professionals with a track-record of
                        delivering results on a wide-variety of projects and
                        programs. We are also recent graduates of the Yale
                        School of Forestry and Environmental Studies with a
                        renewed mission to deploy clean energy, combat climate
                        change and fight for social justice through
                        entrepreneurial solutions. We are relentlessly
                        passionate about using financial technology to
                        democratize the ownership of renewable energy, create
                        new income streams, reduce greenhouse emissions, and
                        empower communities to drive change.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="context margin-top">
          <div className="title-yellow">context</div>
          <div className="row">
            <div className="sub-text col-md-8">{data.Context}</div>
            <div className="context-map-image col-md-4">
              <img src={contextMap} placeholder="context" alt="world map" />
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Overview;
