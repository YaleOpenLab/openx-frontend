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
                {data.extra && data.extra.projectDetails && (
                  <CustomSections sections={data.extra.projectDetails} />
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="architecture margin-top">
                <div className="row">
                  <div className="component-title col-12">
                    <span>engineering</span> / solar layout
                  </div>
                  {data.EImages && data.EImages.length > 2 ? (
                    <React.Fragment>
                      <div className="col-sm-6 col-md-5 mg-top-15 flex-container">
                        <div className="sub-title flex-1">
                          {tempData.engineering.content[0].title}
                        </div>
                        <div className="sub-image flex-11">
                          <img
                            src={data.EImages[0]}
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
                            src={data.EImages[1]}
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
                                src={data.EImages[2]}
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
                                src={data.EImages[3]}
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
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="col-12 col-sm-5">
                        <div className="details-engineering-image">
                          <img
                            src={data.EImages[0]}
                            alt="engineering"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-7">
                        <div className="details-engineering-image">
                          <img
                            src={data.EImages[0]}
                            alt="engineering"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="details-engineering-text">
                          Initial engineering and financial calculations were
                          performed by HST Solar. The equipment was placed in a
                          way to reduce material and labor costs associated with
                          DC and AC wiring, starting from the Point of Common
                          Coupling. This served as a the basis for the ‘Request
                          for Proposal’ that went into public tender, and won by
                          First Solar. Final engineering documents are available
                          below.
                        </div>
                      </div>
                    </React.Fragment>
                  )}
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
