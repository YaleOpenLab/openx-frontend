import React from "react";
import InvestorProjectCard from "./InvestorProjectCard/InvestorProjectCard";

const InvestedProjects = props => (
  <React.Fragment>
    <div className="container investor-title">Invested Projects</div>
    <div className="investor-separator" />
    <div className="invested-projects">
      <div className="project-list">
        <div className="container">
          <div className="row">
            {props.projects.filter((v, i, a) => a.indexOf(v) === i).map(project => {
              return <InvestorProjectCard projectId={project} key={project} />
            })}
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default InvestedProjects;
