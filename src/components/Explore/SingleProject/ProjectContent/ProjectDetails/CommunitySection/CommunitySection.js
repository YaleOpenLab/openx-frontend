import React from "react";

const CommunitySection = props => (
  <div className={`col-6 col-sm-6 ${props.col ? "col-md-"+props.col : "col-md-3"} mg-top-15`}>
    <div className="sub-title">{props.title}</div>
    <div className="sub-image">
      <img src={props.imageUrl} alt={props.title} />
    </div>
    <div className="sub-text">
      {props.text}
    </div>
  </div>
);

export default CommunitySection;