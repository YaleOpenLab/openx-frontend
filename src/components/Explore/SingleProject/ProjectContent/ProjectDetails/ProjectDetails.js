import React from "react";
import { NavLink } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import CommunitySection from "./CommunitySection/CommunitySection";
import BusinessPaymentSection from "./BusinessPaymentSection/BusinessPaymentSection";
import SolarCard from "./SolarCard/SolarCard";

const ProjectDetails = props => {
  const tempData = props.tempData;
  const data = props.data;
  let communityItems = null;
  let businessItems = null;

  if (data.CommunityEngagement) {
    communityItems = data.CommunityEngagement.map(item => {
      return (
        <CommunitySection
          key={item.Title}
          title={item.Title}
          text={item.Content}
          imageUrl={item.ImageURL}
          col={item.Width}
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
                <div className="row">
                  <div className="component-title col-12">
                    <span>architecture</span> / project design
                  </div>
                  <div className="col-sm-6 col-md-4 mg-top-15 ">
                    <div className="project-detail-arch-title">
                      {tempData.architecture[0].title}
                    </div>
                    <div className="project-detail-arch-image-big ">
                      <img
                        src={data.AImages[0]}
                        alt={tempData.architecture[0].title}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 mg-top-15 ">
                    <div className="project-detail-arch-title">
                      {tempData.architecture[1].title}
                    </div>
                    <div className="project-detail-arch-image-small">
                      <img
                        src={data.AImages[1]}
                        alt={tempData.architecture[1].title}
                      />
                    </div>
                    <div className="">
                      <SolarCard items={tempData.architecture[1].list} />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 mg-top-15 ">
                    <div className="project-detail-arch-title">
                      {tempData.architecture[2].title}
                    </div>
                    <div className="project-detail-arch-text">
                      {tempData.architecture[2].text}
                    </div>
                    {data.AImages[2] && (
                      <div className="project-detail-arch-image-small">
                        <img
                          src={data.AImages[2]}
                          alt={tempData.architecture[2].title}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="architecture margin-top">
                <div className="row">
                  {/*TODO: switch layout based on data.engineeringLayoutType property when it gets implemented*/}
                  <div className="component-title col-12">
                    <span>engineering</span> / solar layout
                  </div>
                  <div className="col-sm-6 col-md-5 mg-top-15 flex-container">
                    <div className="sub-title flex-1">
                      {tempData.engineering.content[0].title}
                    </div>
                    <div className="sub-image flex-11">
                      <img
                        src={tempData.engineering.content[0].image}
                        alt={tempData.engineering.content[0].title}
                      />
                    </div>
                    <div className="sub-text flex-8">
                      {tempData.engineering.content[0].text}
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-7 mg-top-15 flex-container">
                    <div className="sub-title flex-1">
                      {tempData.engineering.content[1].title}
                    </div>
                    <div className="sub-image flex-19">
                      <img
                        src={tempData.engineering.content[1].image}
                        alt={tempData.engineering.content[1].title}
                      />
                    </div>
                  </div>
                  <div className="col-12 mg-top-15">
                    <div className="sub-title">
                      {tempData.engineering.content[2].title}
                    </div>
                    <div className="row">
                      <div className="col-4 sub-text">
                        {tempData.engineering.content[2].descriptionOne}
                      </div>
                      <div className="col-4">
                        <div className="sub-image">
                          <img
                            src={tempData.engineering.content[2].imageOne}
                            alt={tempData.engineering.content[2].title}
                          />
                        </div>
                        <div className="sub-text">
                          {tempData.engineering.content[2].descriptionTwo}
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="sub-image">
                          <img
                            src={tempData.engineering.content[2].imageTwo}
                            alt={tempData.engineering.content[2].title}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 link-to-text">
                      <NavLink
                        to={tempData.engineering.linkToDocument}
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
                  to={tempData.communityEngagement.linkToDocument}
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
                <NavLink
                  to={tempData.businessAndPayment.linkToDocument}
                  className="big"
                >
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
