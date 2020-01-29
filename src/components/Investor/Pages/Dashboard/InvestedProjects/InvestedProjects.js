import React from "react";
import InvestorProjectCard from "./InvestorProjectCard/InvestorProjectCard";

const InvestedProjects = ({projects, projectIds, investor}) => (
  <React.Fragment>
    <div className="container investor-title">Invested Projects</div>
    <div className="investor-separator" />
    <div className="invested-projects">
      <div className="project-list">
        <div className="container">
          <div className="row">
            {projectIds.filter((v, i, a) => a.indexOf(v) === i).map((projectId, i) => {
              const project = projects.filter(project => project.Index === projectId);
              return <InvestorProjectCard key={i} projectId={projectId} project={project[0]} investor={investor}/>
            })}
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default InvestedProjects;
