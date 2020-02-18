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

const ProjectContent = ({ data, navigation, active }) => (
  <div className="ProjectContent">
    <AnchorNavigation list={navigation} active={active} data={data} />
    <Terms data={data.Details.Terms} />
    <Overview data={data.Details.Overview} />
    <ProjectDetails data={data.Details["project details"]} />
    <Forecast data={data.Details.Stage} />
    <Documents data={data.documents} />
    <Invest data={data} />
    <SupportOpenX />
  </div>
);

export default ProjectContent;
