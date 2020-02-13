import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import CustomSections from '../../../../General/CustomSections/CustomSections';
import ArchitectureSection from '../../../../General/ArchitectureSection/ArchitectureSection';
import EngineeringSection from '../../../../General/EngineeringSection/EngineeringSection';
import CommunitySection from '../../../../General/CommunitySection/CommunitySection';
import Title from '../../../../General/Title/Title';

const ProjectDetails = ({data}) => {
  return (
    <ScrollableAnchor id={'project'}>
      <section>
        <section className="ProjectDetails -architecture">
          <Title title="Project Details" />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="architecture">
                  <ArchitectureSection items={data["architecture"]} />
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
                  <EngineeringSection items={data["layout"]} />
                </div>
              </div>
            </div>
          </div>

          <div className="community margin-top">
            <div className="container">
              <CommunitySection items={data["community engagement"]} />
            </div>
          </div>
          <div className="business margin-top">
            <div className="container">
              {data.business && (
                <CustomSections sections={data.business}/>
              )}
            </div>
          </div>
        </section>
      </section>
    </ScrollableAnchor>
  );
};

export default ProjectDetails;
