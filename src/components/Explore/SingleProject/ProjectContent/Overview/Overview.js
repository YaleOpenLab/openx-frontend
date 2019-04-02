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
          <SummaryCards title={title} items={items} icon={icon} iconSize="29px" theme="-main-cards"/>
        </div>
      );
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

        {data.OHeroImage ? (
          <div className="full-image" style={{backgroundImage: `url('${data.OHeroImage}')`}}>

          </div>
        ) : (
          <div className="overview-separator"/>
        )}

        <div className="opportunity">
          <div className="container">
            {data.extra && data.extra.opportunity && (
              <CustomSections sections={data.extra.opportunity}/>
            )}
          </div>
        </div>

        <div className="context margin-top">
          <div className="container">
            {data.extra && data.extra.context && (
              <CustomSections sections={data.extra.context}/>
            )}
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Overview;
