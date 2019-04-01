import React from "react";
import "./Overview.scss";
import ScrollableAnchor from "react-scrollable-anchor";
import SummaryCards from "../../../../General/SummaryCards/SummaryCards";
import caseToName from "../../../../../helpers/functions/replace-case-name";
import ExecutiveSummary from "./constants";
import contextMap from "../../../../../assets/images/project-context-map.svg";
import CustomSections from '../../../../General/CustomSections/CustomSections';

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
            <div className="col-12 summary no-padding">
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
          <div className="full-image" style={{'background-image': `url('${data.OHeroImage}')`}}>

          </div>
        ) : (
          <div className="overview-separator"></div>
        )}

        <div className="opportunity">
          <div className="container">
            {data.extra && data.extra.opportunity && (
              <CustomSections sections={data.extra.opportunity} />
            )}
            <div className="row">
              <div className="col-12 title-yellow margin-top">Opportunity</div>
              <div className="col-sm-12 col-md-8 margin-top">
                <div className="sub-title margin-bottom-x4">
                  Description
                </div>
                <div className="sub-text text-bg">
                  {tempData.opportunity.partOne[0].content1}
                  <div className="sub-spacer" />
                  {tempData.opportunity.partOne[0].content2}
                </div>
              </div>

              <div className="col-sm-12 col-md-4 margin-top">
                <div className="sub-title margin-bottom-x4">
                  Badges & Characteristics
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
