import React from "react";
import "./ExploreComponent.scss";
import ProjectsToolsComponent from "./ProjectsToolsComponent/ProjectsToolsComponent";
import Projects from "./Projects/Projects";
import SingleProject from "./SingleProject/SingleProject";

const ExploreComponent = () => {
  return (
    <React.Fragment>
      <div className="ExploreComponent">
        <div className="container">
          <div className="row">
            <ProjectsToolsComponent />
            <Projects />
          </div>
        </div>
        <SingleProject />
      </div>
    </React.Fragment>
  );
};

export default ExploreComponent;
