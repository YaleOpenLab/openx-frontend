import React from "react";
import AnchorNavigation from "../../../General/AnchorNavigation/AnchorNavigation";
import './ProjectContent.scss';
import Terms from "./Terms/Terms";
import Overview from "./Overview/Overview";

const ProjectContent = props => {
  return (
    <div className="ProjectContent">
      <AnchorNavigation list={props.navigation} />
      <Terms />
      <Overview />
      <div id="project">Project</div>
      <div id="stageforecast">Stage & Foreast</div>
      <div id="documents">Documents</div>
    </div>
  );
};

export default ProjectContent;
