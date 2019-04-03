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
                  {data.extra && data.extra.engineering && (
                    <CustomSections sections={data.extra.engineering}/>
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
                  {data.extra && data.extra.architecture && (
                    <CustomSections sections={data.extra.architecture}/>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="community margin-top">
            <div className="container">
              {data.extra && data.extra.community && (
                <CustomSections sections={data.extra.community}/>
              )}
            </div>
          </div>
          <div className="business margin-top">
            <div className="container">
              {data.extra && data.extra.business && (
                <CustomSections sections={data.extra.business}/>
              )}
            </div>
          </div>
        </section>
      </section>
    </ScrollableAnchor>
  );
};

export default ProjectDetails;
