import React from "react";
import { NavLink } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import CommunitySection from "./CommunitySection/CommunitySection";
import BusinessPaymentSection from "./BusinessPaymentSection/BusinessPaymentSection";
import SolarCard from "./SolarCard/SolarCard";
import CustomSections from '../../../../General/CustomSections/CustomSections';

const ProjectDetails = props => {
  const tempData = props.tempData;
  const data = props.data;
  let communityItems = null;
  let businessItems = null;

  if (data.CommunityEngagement) {
    communityItems = data.CommunityEngagement.map((item, i) => {
      return (
        <CommunitySection
          key={item.Title}
          title={item.Title}
          text={item.Content}
          imageUrl={data.CEImages[i]}
        />
      );
    });
  }
  if (tempData.businessAndPayment) {
    businessItems = tempData.businessAndPayment.content.map(item => {
      return (
        <BusinessPaymentSection
          key={item.title}
          title={item.title}
          text={item.text}
          imageUrl={item.image}
        />
      );
    });
  }

  return (
    <ScrollableAnchor id={"project"}>
      <section className="ProjectDetails">
        <div className="container">
          <div className="row">
            <div className="col-12 title border-bottom no-padding">
              Project Details
            </div>
            <div className="col-12">
              <div className="architecture margin-top">
                {data.extra && data.extra.engineering && (
                  <CustomSections sections={data.extra.engineering} />
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="architecture margin-top">
                {data.extra && data.extra.architecture && (
                  <CustomSections sections={data.extra.architecture} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="community margin-top">
          <div className="container">
            {data.extra && data.extra.community && (
              <CustomSections sections={data.extra.community} />
            )}
          </div>
        </div>
        <div className="business margin-top">
          <div className="container">
            {data.extra && data.extra.business && (
              <CustomSections sections={data.extra.business} />
            )}
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default ProjectDetails;
