import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import SummaryCards from "./SummaryCards/SummaryCards";

const Overview = props => {
  let cards = null;
  const data = props.data;

  if (data.summary) {
    cards = data.summary.map(card => {
      return (
        <SummaryCards
          key={card.title}
          title={card.title}
          items={card.parts}
          icon={card.icon}
        />
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

        <div className="full-image">
          <img src={data.bannerImage} alt="summary banner" />
        </div>
        <div className="opportunity">
          <div className="container">
            <div className="row">
              <div className="col-12 title-yellow margin-top">Opportunity</div>
              <div className="col-sm-12 col-md-4 margin-top">
                <div className="sub-title margin-bottom-x4">
                  {data.opportunity.partOne[0].title}
                </div>
                <div className="sub-text">
                  {data.opportunity.partOne[0].content}
                </div>
              </div>

              <div className="col-sm-6 col-md-4 margin-top">
                <div className="sub-title margin-bottom-x4">
                  {data.opportunity.partOne[1].title}
                </div>
                <div className="sub-image">
                  <img
                    src={data.opportunity.partOne[1].content}
                    alt="placeholder"
                  />
                </div>
              </div>

              <div className="col-sm-6 col-md-4 margin-top">
                <div className="sub-title margin-bottom-x4">
                  {data.opportunity.partOne[2].title}
                </div>
                <div className="sub-image">
                  <img
                    src={data.opportunity.partOne[2].content}
                    alt="placeholder"
                  />
                </div>
              </div>

              <div className="col-6 margin-top">
                <div className="sub-image">
                  <img
                    src={data.opportunity.partTwo[0].image}
                    alt="placeholder"
                  />
                </div>
              </div>
              <div className="col-6 margin-top">
                <div className="sub-image">
                  <img
                    src={data.opportunity.partTwo[1].image}
                    alt="placeholder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="context margin-top">
          <div className="title-yellow">context</div>
          <div className="row">
            <div className="sub-text col-md-8">{data.context.text}</div>
            <div className="sub-image col-md-4">
              <img src={data.context.image} placeholder="context" />
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Overview;
