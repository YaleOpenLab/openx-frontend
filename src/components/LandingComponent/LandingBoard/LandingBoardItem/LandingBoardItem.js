import React from "react";

const LandingBoardItem = props => (
  <div className="col-12 col-sm-4 col-md-3 landing-board-item">
    <div className="landing-board-item">
      <div className="landing-board-icon">
        <img src={props.image} alt="invest" />
      </div>
      <div className="landing-board-title">{props.title}</div>
      <div className="landing-board-desc">
        {props.description}
      </div>
    </div>
  </div>
);

export default LandingBoardItem;
