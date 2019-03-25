import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import SummaryCards from "./SummaryCards/SummaryCards";
// import SummaryCardsD from "./SummaryCardsD/SummaryCardsD";

const Overview = props => {
  let cards = null;
  const tempData = props.tempData;
  // const data = props.data;

  if (tempData.summary) {
    cards = tempData.summary.map(card => {
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
                  <div className="row">
                    {/* With real data ... */}
                    {/* <SummaryCardsD 
                      title="Investment"
                      icon="money-icon"
                      itemName1="capex"
                      itemValue1={data.InvestmentMetrics.Capex}
                      itemName2="certification cost"
                      itemValue2={data.InvestmentMetrics.CertificationCosts}
                      itemName3="first loss escrow"
                      itemValue3={data.InvestmentMetrics.FirstLossEscrow}
                      itemName4="hardware"
                      itemValue4={data.InvestmentMetrics.Hardware}
                    />
                    <SummaryCardsD 
                      title="financials"
                      icon="handout-icon"
                      itemName1="insurance"
                      itemValue1={data.FinancialMetrics.Insurance}
                      itemName2="maturity"
                      itemValue2={data.FinancialMetrics.Maturity}
                      itemName3="return"
                      itemValue3={data.FinancialMetrics.Return}
                      itemName4="tariff"
                      itemValue4={data.FinancialMetrics.Tariff}
                    />
                    <SummaryCardsD 
                      title="project size"
                      icon="settings-icon"
                      itemName1="% critical"
                      itemValue1={data.ProjectSizeMetric.Critical}
                      itemName2="inverter capacity"
                      itemValue2={data.ProjectSizeMetric.InverterCapacity}
                      itemName3="pv solar"
                      itemValue3={data.ProjectSizeMetric.PVSolar}
                      itemName4="storage"
                      itemValue4={data.ProjectSizeMetric.Storage}
                    />
                    <SummaryCardsD 
                      title="sustainability"
                      icon="preferences-icon"
                      itemName1="carbon drawdown"
                      itemValue1={data.SustainabilityMetric.CarbonDrawdown}
                      itemName2="community value"
                      itemValue2={data.SustainabilityMetric.CommnunityValue}
                      itemName3="lca"
                      itemValue3={data.SustainabilityMetric.LCA}
                    /> */}
                    {cards}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="full-image">
          <img src={tempData.bannerImage} alt="summary banner" />
        </div>
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

              <div className="col-6 margin-top">
                <div className="sub-image">
                  <img
                    src={tempData.opportunity.partTwo[0].image}
                    alt="placeholder"
                  />
                </div>
              </div>
              <div className="col-6 margin-top">
                <div className="sub-image">
                  <img
                    src={tempData.opportunity.partTwo[1].image}
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
            <div className="sub-text col-md-8">{tempData.context.text}</div>
            <div className="sub-image col-md-4">
              <img
                src={tempData.context.image}
                placeholder="context"
                alt="world map"
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Overview;
