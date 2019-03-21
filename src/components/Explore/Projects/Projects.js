import React from 'react';
import './Projects.scss';
import ProjectsToolsComponent from '../ProjectsToolsComponent/ProjectsToolsComponent';
import ProjectsTemplate from './ProjectsTemplate/ProjectsTemplate';
import connect from 'react-redux/es/connect/connect';

const Projects = props => (
  <div className="container">
    <div className="row">
      <ProjectsToolsComponent/>
      <div className="col-sm-12 col-md-8 col-lg-9">
        <div className="Projects">
          <div className="row">
            {props.projects.map(project => (
                <ProjectsTemplate
                  location={project.Location}
                  metadata={project.Metadata}
                  imageUrl="https://via.placeholder.com/350x350"
                  title="Pasto Public School - Poc 1kW"
                  status="installed"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({projects: state.projects});

export default connect(
  mapStateToProps
)(Projects);
