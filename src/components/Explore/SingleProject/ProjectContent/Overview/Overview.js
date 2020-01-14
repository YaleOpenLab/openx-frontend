import React from 'react';
import './Overview.scss';
import ScrollableAnchor from 'react-scrollable-anchor';
import SummaryCards from '../../../../General/SummaryCards/SummaryCards';
import caseToName from '../../../../../helpers/functions/replace-case-name';
import ExecutiveSummary from './constants';
import CustomSections from '../../../../General/CustomSections/CustomSections';
import Title from '../../../../General/Title/Title';

const Overview = props => {
  let cards = null;
  const data = props.data;

  if (data.executiveSummary) {
    cards = Object.keys(data.executiveSummary).map(key => {
      let title = ExecutiveSummary[key].title;
      let icon = ExecutiveSummary[key].icon;
      let items = [];
    //   if (data.ExecutiveSummary[key]) {
    //     for (let item of Object.entries(data.ExecutiveSummary[key])) {
    //       //todo: remove this check when data changes
    //       items.push({
    //         value: item[0] === "capex" || item[0] === "first-loss-escrow" ? "$ " + item[1] : (item[0] === "hardware ratio" || item[0] === "return (tey)" ? item[1] + "%" : item[1]),
    //         desc: caseToName(item[0])
    //       });
    //     }
    //     if (key === "SustainabilityMetrics") {
    //       items.push({
    //         value: data.ResilienceRating * 100 + "%",
    //         desc: "Resiliency Rating",
    //       });
    //     }
    //   }
		//
    //   return (
    //     <div className="col-sm-6 col-lg-3" key={title}>
    //       <SummaryCards title={title} items={items} icon={icon} iconSize="29px" theme="-main-cards"/>
    //     </div>
    //   );
    });
  }

  return (
    <ScrollableAnchor id={'overview'}>
      <section className="Overview">
        <Title title="Project Overview"/>
        <div className="container">
          <div className="row">
            <div className="col-12 title-yellow">
              Executive Summary
            </div>
            <div className="col-12 summary-grid">
              <div className="container">
                <div className="row">{cards}</div>
              </div>
            </div>
          </div>
        </div>

        {data.mainImage ? (
          <div className="full-image" style={{backgroundImage: `url('${data.mainImage}')`}}>
          </div>
        ) : (
          <div className="overview-separator"/>
        )}

        <div className="opportunity">
          <div className="container">
            {data.FEText && data.FEText.opportunity && (
              <CustomSections sections={data.FEText.opportunity}/>
            )}
          </div>
        </div>

        <div className="context margin-top">
          <div className="container">
            {data.FEText && data.FEText.context && (
              <CustomSections sections={data.FEText.context}/>
            )}
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Overview;
