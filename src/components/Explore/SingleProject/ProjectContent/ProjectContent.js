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
  offset: -68,
  scrollDuration: 500,
  keepLastAnchorHash: true
});

const ProjectContent = props => (
  <div className="ProjectContent">
    <AnchorNavigation list={props.navigation} active={props.active} data={props.data} />
    <Terms data={props.data} />
    <Overview data={props.data} />
    <ProjectDetails data={props.data} />
    <Forecast data={props.data} />
    <Documents data={props.tempData.documents} />
    <Invest data={props.data} />
    <SupportOpenX />
  </div>
);

export default ProjectContent;
