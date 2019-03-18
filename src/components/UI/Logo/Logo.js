import React from "react";
import "./Logo.scss";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";

const logo = props => (
  <div className={`Logo ${props.type === "white" ? "logo-white" : "logo-default"}`}>
    <NavLink to={ROUTES.HOME}>
      <span className="FirstPart">open</span>
      <span className="SecondPart">{props.projectName}</span>
    </NavLink>
  </div>
);

export default logo;
