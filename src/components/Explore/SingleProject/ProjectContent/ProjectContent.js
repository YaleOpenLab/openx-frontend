import React from "react";
import AnchorNavigation from "../../../General/AnchorNavigation/AnchorNavigation";
import "./ProjectContent.scss";
import Terms from "./Terms/Terms";
import Overview from "./Overview/Overview";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import Forecast from "./Forecast/Forecast";
import Documents from "./Documents/Documents";
import Invest from "./Invest/Invest";
import SupportOpenX from "../../../General/SupportOpenX/SupportOpenX";

const ProjectContent = props => {
  return (
    <div className="ProjectContent">
      <AnchorNavigation list={props.navigation} />
      <Terms />
      <Overview />
      <ProjectDetails />
      <Forecast />
      <Documents />
      <Invest />
      <SupportOpenX />
    </div>
  );
};

export default ProjectContent;
