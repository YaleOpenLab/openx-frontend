import React from "react";
import "./ProjectInfo.scss";
import PageLoading from "../../../../General/Loading/Loading";

const ProjectInfo = props => {
  if(props.loading) return <PageLoading />;
  return (
    <div className="confirm-project-info">
      <div className="confirm-project-type">invest in</div>
      <div className="confirm-project-title">{props.data.Name}</div>
      <div className="confirm-project-location">
        <div className="confirm-project-location-icon location-icon" />
        {props.data.State}, {props.data.Country}
      </div>
      <div className="confirm-project-desc">
        {props.data.ExplorePageSummary && props.data.ExplorePageSummary.Solar}{" "}
        solar
      </div>
      <div className="confirm-project-image">
        <img src={props.data.DPIntroImage} alt={props.data.Name} />
      </div>
    </div>
  );
};

export default ProjectInfo;
