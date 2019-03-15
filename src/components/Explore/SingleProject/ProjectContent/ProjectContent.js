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
import { configureAnchors } from "react-scrollable-anchor";
configureAnchors({
  offset: -90,
  scrollDuration: 500,
  keepLastAnchorHash: true
});

const ProjectContent = props => (
  <div className="ProjectContent">
    <AnchorNavigation list={props.navigation} active={props.active} />
    <Terms />
    <Overview />
    <ProjectDetails />
    <Forecast />
    <Documents />
    <Invest />
    <SupportOpenX />
  </div>
);

export default ProjectContent;
