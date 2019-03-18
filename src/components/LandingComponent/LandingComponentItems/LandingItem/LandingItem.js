import React from "react";
import { NavLink } from "react-router-dom";

const LandingItem = props => (
  <div className="col-md-5 item">
    <NavLink to={props.url}>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="image-div">
        <img
          src={props.imageUrl}
          alt={props.title}
        />
        <div className="image-link">{props.diffUrl}</div>
      </div>
    </NavLink>
  </div>
);

export default LandingItem;
