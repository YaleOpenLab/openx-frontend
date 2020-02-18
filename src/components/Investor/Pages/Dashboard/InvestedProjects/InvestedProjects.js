import React from "react";
import InvestorProjectCard from "./InvestorProjectCard/InvestorProjectCard";

const InvestedProjects = ({ projects }) => (
  <React.Fragment>
    <div className="container investor-title">Invested Projects</div>
    <div className="investor-separator" />
    <div className="invested-projects">
      <div className="project-list">
        <div className="container">
          <div className="row">
            {projects.map(project => {
              return (
                <InvestorProjectCard key={project.Index} project={project} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default InvestedProjects;
