import React from "react";
import { NavLink } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import CommunitySection from "./CommunitySection/CommunitySection";
import BusinessPaymentSection from "./BusinessPaymentSection/BusinessPaymentSection";
import SolarCard from "./SolarCard/SolarCard";

const ProjectDetails = props => {
  const data = props.data;
  let communityItems = null;
  let businessItems = null;

  if (data.communityEngagement) {
    communityItems = data.communityEngagement.content.map(item => {
      return (
        <CommunitySection
          title={item.title}
          text={item.text}
          imageUrl={item.image}
        />
      );
    });
  }
  if (data.businessAndPayment) {
    businessItems = data.businessAndPayment.content.map(item => {
      return (
        <BusinessPaymentSection
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
                <div className="row">
                  <div className="component-title col-12">
                    <span>architecture</span> / project design
                  </div>
                  <div className="col-sm-6 col-md-4 mg-top-15 flex-container">
                    <div className="sub-title flex-1">
                      {data.architecture[0].title}
                    </div>
                    <div className="sub-image flex-19">
                      <img
                        src={data.architecture[0].image}
                        alt={data.architecture[0].title}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 mg-top-15 flex-container">
                    <div className="sub-title flex-1">
                      {data.architecture[1].title}
                    </div>
                    <div className="sub-image flex-8">
                      <img
                        src={data.architecture[1].image}
                        alt={data.architecture[1].title}
                      />
                    </div>
                    <div className="flex-11">
                      <SolarCard items={data.architecture[1].list} />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 mg-top-15 flex-container">
                    <div className="sub-title flex-1">
                      {data.architecture[2].title}
                    </div>
                    <div className="sub-text flex-11">
                      {data.architecture[2].text}
                    </div>
                    <div className="sub-image flex-8">
                      <img
                        src={data.architecture[2].image}
                        alt={data.architecture[2].title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="architecture margin-top">
                <div className="row">
                  <div className="component-title col-12">
                    <span>engineering</span> / solar layout
                  </div>
                  <div className="col-sm-6 col-md-5 mg-top-15 flex-container">
                    <div className="sub-title flex-1">
                      {data.engineering.content[0].title}
                    </div>
                    <div className="sub-image flex-11">
                      <img
                        src={data.engineering.content[0].image}
                        alt={data.engineering.content[0].title}
                      />
                    </div>
                    <div className="sub-text flex-8">
                      {data.engineering.content[0].text}
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-7 mg-top-15 flex-container">
                    <div className="sub-title flex-1">
                      {data.engineering.content[1].title}
                    </div>
                    <div className="sub-image flex-19">
                      <img
                        src={data.engineering.content[1].image}
                        alt={data.engineering.content[1].title}
                      />
                    </div>
                  </div>
                  <div className="col-12 mg-top-15">
                    <div className="sub-title">
                      {data.engineering.content[2].title}
                    </div>
                    <div className="row">
                      <div className="col-4 sub-text">
                        {data.engineering.content[2].descriptionOne}
                      </div>
                      <div className="col-4">
                        <div className="sub-image">
                          <img
                            src={data.engineering.content[2].imageOne}
                            alt={data.engineering.content[2].title}
                          />
                        </div>
                        <div className="sub-text">
                          {data.engineering.content[2].descriptionTwo}
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="sub-image">
                          <img
                            src={data.engineering.content[2].imageTwo}
                            alt={data.engineering.content[2].title}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 link-to-text">
                      <NavLink
                        to={data.engineering.linkToDocument}
                        className="big"
                      >
                        Link to specific document for this section >
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="community margin-top">
          <div className="container">
            <div className="row">
              <div className="component-title col-12">
                <span>community engagement</span>
              </div>
              {communityItems}
              <div className="col-12 link-to-text">
                <NavLink
                  to={data.communityEngagement.linkToDocument}
                  className="big"
                >
                  Link to specific document for this section >
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="business margin-top">
          <div className="container">
            <div className="row">
              <div className="component-title col-12">
                <span>business numbers & payment scheme</span>
              </div>
              {businessItems}
              <div className="col-12 link-to-text">
                <NavLink to={data.businessAndPayment.linkToDocument} className="big">
                  Link to specific document for this section >
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default ProjectDetails;
