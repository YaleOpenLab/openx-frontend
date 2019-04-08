import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import CustomSections from '../../../../General/CustomSections/CustomSections';
import Title from '../../../../General/Title/Title';

const ProjectDetails = props => {
  const data = props.data;

  return (
    <ScrollableAnchor id={'project'}>
      <section>
        <section className="ProjectDetails -architecture">
          <Title title="Project Details" />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="architecture">
                  {data.FEText && data.FEText.engineering && (
                    <CustomSections sections={data.FEText.engineering}/>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ProjectDetails -engineering">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="engineering">
                  {data.FEText && data.FEText.architecture && (
                    <CustomSections sections={data.FEText.architecture}/>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="community margin-top">
            <div className="container">
              {data.FEText && data.FEText.community && (
                <CustomSections sections={data.FEText.community}/>
              )}
            </div>
          </div>
          <div className="business margin-top">
            <div className="container">
              {data.FEText && data.FEText.business && (
                <CustomSections sections={data.FEText.business}/>
              )}
            </div>
          </div>
        </section>
      </section>
    </ScrollableAnchor>
  );
};

export default ProjectDetails;
