import React from "react";
import "./Projects.scss";
import ProjectsToolsComponent from "../ProjectsToolsComponent/ProjectsToolsComponent";
import ProjectsTemplate from "./ProjectsTemplate/ProjectsTemplate";

const Projects = props => (
  <div className="container">
    <div className="row">
      <ProjectsToolsComponent />

      <div className="col-sm-12 col-md-8 col-lg-9">
        <div className="Projects">
          <div className="row">
            <ProjectsTemplate
              imageUrl="https://via.placeholder.com/350x350"
              title="Pasto Public School - Poc 1kW"
              status="installed"
            />
            <ProjectsTemplate
              imageUrl="https://via.placeholder.com/350x350"
              title="Pasto Public School - Poc 1kW"
              status="early stage"
            />
            <ProjectsTemplate
              imageUrl="https://via.placeholder.com/350x350"
              title="Pasto Public School - Poc 1kW"
              status="installed"
            />
            <ProjectsTemplate
              imageUrl="https://via.placeholder.com/350x350"
              title="Pasto Public School - Poc 1kW"
              status="early stage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
