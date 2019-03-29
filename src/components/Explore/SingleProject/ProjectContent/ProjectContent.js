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
    <AnchorNavigation list={props.navigation} active={props.active} />
    <Terms tempData={props.tempData.terms} data={props.data} />
    <Overview tempData={props.tempData.projectOverview} data={props.data} />
    <ProjectDetails tempData={props.tempData.project} data={props.data} />
    <Forecast tempData={props.tempData.stageAndForecast} data={props.data} />
    <Documents data={props.tempData.documents} />
    <Invest />
    <SupportOpenX />
  </div>
);

export default ProjectContent;
