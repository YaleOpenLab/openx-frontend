import React from "react";
import "./ExploreComponent.scss";
import ProjectsToolsComponent from "./ProjectsToolsComponent/ProjectsToolsComponent";
import Projects from "./Projects/Projects";

const exploreComponent = () => {
  return (
    <React.Fragment>
      <div className="ExploreComponent">
        <div className="container">
          <div className="row">
            <ProjectsToolsComponent />
            <Projects />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default exploreComponent;
