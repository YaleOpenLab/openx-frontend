import React from 'react';
import './ProjectInfo.scss';

const ProjectInfo = ({project}) => (
  <div className="confirm-project-info">
    <div className="confirm-project-type">invest in</div>
    <div className="confirm-project-title">{project.Name}</div>
    <div className="confirm-project-location">
      <div className="confirm-project-location-icon location-icon"/>
      {project.State}, {project.Country}
    </div>
    <div className="confirm-project-desc">{project.Solar} solar</div>
    <div className="confirm-project-image">
      <img src={project.MainImage} alt={project.Name} />
    </div>
  </div>
);

export default ProjectInfo;
